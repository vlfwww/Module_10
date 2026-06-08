import reducer, {
  setCredentials,
  updateUserAction,
  logoutAction,
  setLoadingAction,
} from "./authSlice";
import { AuthState, User } from "../../types/auth";

describe("authSlice", () => {
  const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
  };

  beforeEach(() => {
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.removeItem = jest.fn();
    jest.clearAllMocks();
  });

  test("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      user: null,
      token: localStorage.getItem("access_token"),
      isAuthenticated: !!localStorage.getItem("access_token"),
      isLoading: false,
    });
  });

  test("should update user and token", () => {
    const payload = {
      user: { id: "1", email: "test@test.com" } as User,
      token: "fake-token",
    };
    const newState = reducer(initialState, setCredentials(payload));

    expect(newState.user).toEqual(payload.user);
    expect(newState.token).toEqual("fake-token");
    expect(newState.isAuthenticated).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith("access_token", "fake-token");
  });

  test("should update existing user", () => {
    const stateWithUser = { ...initialState, user: { id: "1", email: "old@test.com" } as User };
    const update = { email: "new@test.com" };

    const newState = reducer(stateWithUser, updateUserAction(update));

    expect(newState.user?.email).toBe("new@test.com");
  });

  test("should set user if it was null", () => {
    const newUser = { id: "2", email: "new@test.com" } as User;
    const newState = reducer(initialState, updateUserAction(newUser));

    expect(newState.user).toEqual(newUser);
  });

  test("should clear state when logout", () => {
    const stateWithData = {
      user: { id: "1" } as User,
      token: "t",
      isAuthenticated: true,
      isLoading: false,
    };

    const newState = reducer(stateWithData, logoutAction());

    expect(newState.user).toBeNull();
    expect(newState.token).toBeNull();
    expect(newState.isAuthenticated).toBe(false);
    expect(localStorage.removeItem).toHaveBeenCalledWith("access_token");
  });

  test("should set isLoading", () => {
    const newState = reducer(initialState, setLoadingAction(true));
    expect(newState.isLoading).toBe(true);
  });
});
