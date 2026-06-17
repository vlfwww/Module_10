"use client";

import { createContext, useContext, ReactNode, useCallback, useEffect } from "react";
import { AuthContextType, User } from "@/types/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import {
  setCredentials,
  logoutAction,
  updateUserAction,
  setLoadingAction,
} from "@/store/slices/authSlice";
import { graphqlRequest } from "@/api/graphqlClient";
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  ME_QUERY,
  UPDATE_PROFILE_MUTATION,
} from "@/api/authQueries";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);

  const login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      dispatch(setLoadingAction(true));
      try {
        const data = await graphqlRequest<{ login: { token: string; user: User } }>(
          LOGIN_MUTATION,
          { email, password },
        );

        if (!data?.login) {
          throw new Error("Incorrect email or password");
        }

        const { token, user: loggedUser } = data.login;
        dispatch(setCredentials({ user: loggedUser, token }));

        localStorage.setItem("access_token", token);
        localStorage.setItem("current_user", JSON.stringify(loggedUser));
        localStorage.setItem("is_auth", "true");

        return true;
      } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : "Incorrect email or password";
        throw new Error(msg);
      } finally {
        dispatch(setLoadingAction(false));
      }
    },
    [dispatch],
  );

  const register = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      try {
        const data = await graphqlRequest<{ signup: User }>(SIGNUP_MUTATION, { email, password });

        if (!data?.signup) {
          throw new Error("Registration failed");
        }

        return await login(email, password);
      } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : "Registration failed";
        throw new Error(msg);
      }
    },
    [login],
  );

  const logout = useCallback(() => {
    dispatch(logoutAction());
    localStorage.removeItem("is_auth");
    localStorage.removeItem("access_token");
    localStorage.removeItem("current_user");
  }, [dispatch]);

  const getUserInfo = useCallback(async (): Promise<User | null> => {
    const token = localStorage.getItem("access_token");
    if (!token) return null;

    dispatch(setLoadingAction(true));
    try {
      const data = await graphqlRequest<{ me: User }>(ME_QUERY);

      if (!data?.me) {
        logout();
        return null;
      }

      const userData: User = data.me;

      dispatch(updateUserAction(userData));
      localStorage.setItem("current_user", JSON.stringify(userData));
      localStorage.setItem("is_auth", "true");

      return userData;
    } catch (error: unknown) {
      console.error("Failed to fetch user info", error);
      logout();
      return null;
    } finally {
      dispatch(setLoadingAction(false));
    }
  }, [logout, dispatch]);

  const updateUserInfo = useCallback(
    async (updatedFields: Partial<User>): Promise<boolean> => {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("No access token found");

      dispatch(setLoadingAction(true));
      try {
        const data = await graphqlRequest<{ updateProfile: User }>(UPDATE_PROFILE_MUTATION, {
          input: updatedFields,
        });

        if (!data?.updateProfile) {
          throw new Error("Failed to update profile");
        }

        const serverUser = data.updateProfile;

        dispatch(updateUserAction(serverUser));
        localStorage.setItem("current_user", JSON.stringify(serverUser));
        return true;
      } catch (error: unknown) {
        console.error("Update profile failed", error);
        const msg = error instanceof Error ? error.message : "Failed to update profile";
        throw new Error(msg);
      } finally {
        dispatch(setLoadingAction(false));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        await getUserInfo();
      }
    };

    initializeAuth();
  }, [getUserInfo]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        login,
        logout,
        register,
        updateUserInfo,
        getUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
