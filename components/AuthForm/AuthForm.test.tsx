import { act, render, screen } from "@testing-library/react";
import AuthForm from "./AuthForm";
import { AuthContext } from "../../context/AuthContext";
import { usePathname } from "next/navigation";
import userEvent from "@testing-library/user-event";
import { AuthContextType } from "../../types/auth";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const renderWithProviders = (
  props: Partial<React.ComponentProps<typeof AuthForm>> = {},
  isLoading = false,
  onSubmit: jest.Mock = jest.fn(),
) => {
  const defaultProps = {
    title: "Sign In",
    subtitle: "Welcome back",
    buttonText: "Login",
    onSubmit: jest.fn(),
    error: "",
    setError: jest.fn(),
    pageType: "signin" as const,
    validationRules: {
      email: { required: "Required" },
      password: { required: "Required" },
    },
  };

  const contextValue: Partial<AuthContextType> = {
    isLoading,

    login: onSubmit,
  };

  (usePathname as jest.Mock).mockReturnValue("/singin");
  
  render(
    <AuthContext.Provider value={contextValue as AuthContextType}>
      <AuthForm {...defaultProps} {...props} />
    </AuthContext.Provider>,
  );
};

describe("AuthForm", () => {
  test("renders title and subtitle correctly", () => {
    renderWithProviders();

    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Welcome back")).toBeInTheDocument();
  });

  test("calls onSubmit when form is submitted with valid data", async () => {
    const mockOnSubmit = jest.fn();
    const user = userEvent.setup();

    renderWithProviders({ onSubmit: mockOnSubmit });

    const emailInput = screen.getByPlaceholderText(/input.enter auth.email/i);
    const passwordInput = screen.getByPlaceholderText(/input.enter auth.password/i);
    const submitButton = screen.getByRole("button", { name: /Login/i });

    await user.type(emailInput, "test@test.com");
    await user.type(passwordInput, "password123");
    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith("test@test.com", "password123");
  });

  test("disables inputs and button when loading", async () => {
    renderWithProviders({}, true);

    const emailInput = screen.getByPlaceholderText(/input.enter auth.email/i);
    const passwordInput = screen.getByPlaceholderText(/input.enter auth.password/i);
    const submitButton = screen.getByRole("button", { name: /auth\.please_wait/i });

    expect(emailInput).toBeDisabled();
    expect(passwordInput).toBeDisabled();
    expect(submitButton).toBeDisabled();
  });

  test("does not submit form when user enters invalid email and submits", async () => {
    const mockOnSubmit = jest.fn();
    const user = userEvent.setup();

    renderWithProviders({}, false, mockOnSubmit);

    const emailInput = screen.getByPlaceholderText(/input.enter auth.email/i);
    const passwordInput = screen.getByPlaceholderText(/input.enter auth.password/i);
    const submitButton = screen.getByRole("button", { name: /Login/i });

    await user.type(emailInput, "not-an-email");
    await user.type(passwordInput, "pwd");
    await user.click(submitButton);

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test("shows validation errors when fields are touched and left empty", async () => {
    const user = userEvent.setup();
    renderWithProviders();

    const emailInput = screen.getByPlaceholderText(/input.enter auth.email/i);

    await user.click(emailInput);
    await user.tab();

    const errorMsg = await screen.findByText("Required");
    expect(errorMsg).toBeInTheDocument();
  });

  test("renders signup specific elements when pageType is signup", () => {
    renderWithProviders({
      pageType: "signup",
      title: "Sign Up",
      subtitle: "Create account",
      buttonText: "Register",
    });

    expect(screen.getByText(/auth\.terms_prefix/i)).toBeInTheDocument();

    const signInLink = screen.getByRole("link", { name: /auth\.signin_link/i });
    expect(signInLink).toBeInTheDocument();
    expect(signInLink).toHaveAttribute("href", "/signin");
  });

  test("resets error when form is submitted", async () => {
    const mockSetError = jest.fn();
    const mockOnSubmit = jest.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();

    renderWithProviders({ error: "Some error", setError: mockSetError, onSubmit: mockOnSubmit });

    const emailInput = screen.getByPlaceholderText(/input.enter auth.email/i);
    const passwordInput = screen.getByPlaceholderText(/input.enter auth.password/i);
    const submitButton = screen.getByRole("button", { name: /Login/i });

    await user.type(emailInput, "test@test.com");
    await user.type(passwordInput, "password123");

    await act(async () => {
      await user.click(submitButton);
    });

    expect(mockSetError).toHaveBeenCalledWith("");
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  test("disables signup link when isLoading is true", async () => {
    renderWithProviders(
      {
        pageType: "signup",
        title: "Sign Up",
        subtitle: "Create account",
        buttonText: "Register",
      },
      true,
    );

    const signInLink = screen.getByRole("link", { name: /auth\.signin_link/i });

    expect(signInLink).toHaveClass("linkDisabled");

    expect(signInLink).toBeInTheDocument();
  });
});
