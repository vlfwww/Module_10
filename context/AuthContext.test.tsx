import { renderHook, waitFor } from "@testing-library/react";
import { AuthProvider, useAuth } from "./AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { graphqlRequest } from "../api/graphqlClient";
import {
  setCredentials,
  logoutAction,
  updateUserAction,
  setLoadingAction,
} from "../store/slices/authSlice";

jest.mock("../api/graphqlClient");
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock("../store/slices/authSlice");

describe("AuthContext", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    const mockedDispatch = jest.mocked(useDispatch);
    mockedDispatch.mockReturnValue(mockDispatch);

    const mockedSelector = jest.mocked(useSelector);
    mockedSelector.mockReturnValue({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });

    localStorage.clear();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthProvider>{children}</AuthProvider>
  );

  test("updates state and localStorage while login", async () => {
    const mockUser = { id: "1", email: "test@test.com", username: "test" };
    const mockToken = "fake-token";
    (graphqlRequest as jest.Mock).mockResolvedValue({
      login: { token: mockToken, user: mockUser },
    });

    const { result } = renderHook(() => useAuth(), { wrapper });

    const success = await result.current.login("test@test.com", "password");

    expect(success).toBe(true);
    expect(mockDispatch).toHaveBeenCalledWith(setLoadingAction(true));
    expect(mockDispatch).toHaveBeenCalledWith(setCredentials({ user: mockUser, token: mockToken }));
    expect(localStorage.getItem("access_token")).toBe(mockToken);
    expect(mockDispatch).toHaveBeenCalledWith(setLoadingAction(false));
  });

  test("handles error while logic", async () => {
    (graphqlRequest as jest.Mock).mockRejectedValue(new Error("Incorrect email or password"));

    const { result } = renderHook(() => useAuth(), { wrapper });

    await expect(result.current.login("bad@email.com", "wrong")).rejects.toThrow(
      "Incorrect email or password",
    );
    expect(mockDispatch).toHaveBeenCalledWith(setLoadingAction(false));
  });

  test("calls login after success while register", async () => {
    const mockUser = { id: "1", email: "new@test.com" };
    (graphqlRequest as jest.Mock)
      .mockResolvedValueOnce({ signup: { id: "1" } })
      .mockResolvedValueOnce({ login: { token: "t", user: mockUser } });

    const { result } = renderHook(() => useAuth(), { wrapper });

    const success = await result.current.register("new@test.com", "password");

    expect(success).toBe(true);
  });

  test("clears storage and dispatches action while logout", async () => {
    localStorage.setItem("access_token", "token");
    (graphqlRequest as jest.Mock).mockResolvedValue({
      me: { id: "1", email: "test@test.com", username: "test" },
    });

    const { result } = renderHook(() => useAuth(), { wrapper });

    await waitFor(() => {
      expect(graphqlRequest).toHaveBeenCalled();
    });

    result.current.logout();

    expect(mockDispatch).toHaveBeenCalledWith(logoutAction());
    expect(localStorage.getItem("access_token")).toBeNull();
  });

  test("fetches data if token exists in getUserInfo", async () => {
    const mockUser = { id: "1", email: "me@test.com" };
    localStorage.setItem("access_token", "fake-token");
    (graphqlRequest as jest.Mock).mockResolvedValue({ me: mockUser });

    const { result } = renderHook(() => useAuth(), { wrapper });

    const user = await result.current.getUserInfo();

    expect(user).toEqual(mockUser);
    expect(mockDispatch).toHaveBeenCalledWith(updateUserAction(mockUser));
  });

  test("updates profile", async () => {
    const updatedUser = { email: "new@test.com" };
    localStorage.setItem("access_token", "fake-token");
    (graphqlRequest as jest.Mock).mockResolvedValue({ updateProfile: updatedUser });

    const { result } = renderHook(() => useAuth(), { wrapper });

    const success = await result.current.updateUserInfo({ email: "new@test.com" });

    expect(success).toBe(true);
    expect(mockDispatch).toHaveBeenCalledWith(updateUserAction(updatedUser));
  });

  test("useAuth throws error when used outside provider", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(jest.fn());
    expect(() => renderHook(() => useAuth())).toThrow("useAuth must be used within AuthProvider");
    consoleSpy.mockRestore();
  });
});
