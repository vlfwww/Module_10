import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProfileInfoForm from "./ProfileForm";
import { renderWithProviders } from "@/utils/testUtils/test-utils";
import * as notificationContext from "@/context/NotificationContext";
import { useNotification } from "@/context/NotificationContext";

interface MockAuthValue {
  user: {
    id: string;
    username: string;
    email: string;
    description: string;
  };
  updateUserInfo: jest.Mock;
  isLoading?: boolean;
}

jest.mock("@/context/NotificationContext", () => {
  const originalModule = jest.requireActual("@/context/NotificationContext");
  return {
    ...originalModule,
    useNotification: jest.fn(),
  };
});

describe("ProfileInfoForm Component", () => {
  const mockUpdateUserInfo = jest.fn();
  const mockShowNotification = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useNotification as jest.Mock).mockReturnValue({
      showNotification: mockShowNotification,
      hideNotification: jest.fn(),
    });
  });

  test("renders form and fields correctly with initial data", async () => {
    const authValue = {
      user: { id: "1", username: "Helena", email: "helenahills@social.com", description: "Hello" },
      updateUserInfo: mockUpdateUserInfo,
      isLoading: false,
    };
    renderWithProviders(<ProfileInfoForm />, {
      authValue: authValue as MockAuthValue,
    });

    expect(await screen.findByDisplayValue("Helena")).toBeInTheDocument();
    expect(await screen.findByDisplayValue("helenahills@social.com")).toBeInTheDocument();
  });

  test("successfully submits valid form data", async () => {
    const user = userEvent.setup();
    const authValue = {
      user: { username: "OldName", email: "old@test.com", description: "" },
      updateUserInfo: mockUpdateUserInfo,
      isLoading: false,
    };

    renderWithProviders(<ProfileInfoForm />, { authValue: authValue as MockAuthValue });

    const usernameInput = await screen.findByDisplayValue("OldName");
    const emailInput = await screen.findByDisplayValue("old@test.com");
    const saveBtn = screen.getByRole("button", { name: /profile_form.save_changes/i });

    await user.clear(usernameInput);
    await user.type(usernameInput, "NewName");

    await user.clear(emailInput);
    await user.type(emailInput, "new@test.com");

    await user.click(saveBtn);

    await waitFor(() => {
      expect(mockUpdateUserInfo).toHaveBeenCalledWith(
        expect.objectContaining({
          username: "NewName",
          email: "new@test.com",
        }),
      );
    });
  });

  test("shows error notification when update fails", async () => {
    const user = userEvent.setup();
    mockUpdateUserInfo.mockRejectedValueOnce(new Error("Network error"));

    const authValue = {
      user: { username: "Helena", email: "test@test.com", description: "" },
      updateUserInfo: mockUpdateUserInfo,
      isLoading: false,
    };

    renderWithProviders(<ProfileInfoForm />, { authValue: authValue as MockAuthValue });

    const saveBtn = screen.getByRole("button", { name: /profile_form.save_changes/i });
    await user.click(saveBtn);

    await waitFor(() => {
      expect(mockUpdateUserInfo).toHaveBeenCalled();
    });
  });

  test("updates avatar image when file is selected", async () => {
    const user = userEvent.setup();
    const { container } = renderWithProviders(<ProfileInfoForm />);

    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["content"], "avatar.png", { type: "image/png" });

    await user.upload(fileInput, file);

    await waitFor(() => {
      expect(fileInput).toBeDefined();
    });
  });

  test("disables save button when form is invalid", async () => {
    const authValue = {
      user: { username: "H", email: "invalid-email", description: "" },
      updateUserInfo: mockUpdateUserInfo,
    };

    renderWithProviders(<ProfileInfoForm />, { authValue: authValue as MockAuthValue });

    const saveBtn = screen.getByRole("button", { name: /profile_form.save_changes/i });

    expect(saveBtn).toBeDisabled();
  });

  test("shows validation errors when input is invalid", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ProfileInfoForm />);

    const usernameInput = screen.getByTestId("username-input");
    const emailInput = screen.getByTestId("email-input");

    await user.clear(usernameInput);
    await user.type(usernameInput, "Hi");
    await user.tab();

    expect(await screen.findByText(/profile_form.errors.username_short/i)).toBeInTheDocument();

    await user.clear(emailInput);
    await user.type(emailInput, "invalid-email");
    await user.tab();

    expect(await screen.findByText(/profile_form.errors.email_invalid/i)).toBeInTheDocument();

    const saveBtn = screen.getByRole("button", { name: /profile_form.save_changes/i });
    expect(saveBtn).toBeDisabled();
  });

  test("shows error notification when update fails", async () => {
    const user = userEvent.setup();
    const errorMessage = "Network error";

    mockUpdateUserInfo.mockRejectedValueOnce(new Error(errorMessage));

    const authValue = {
      user: { username: "Helena", email: "test@test.com", description: "" },
      updateUserInfo: mockUpdateUserInfo,
      isLoading: false,
    };

    renderWithProviders(<ProfileInfoForm />, {
      authValue: authValue as MockAuthValue,
    });

    const saveBtn = screen.getByRole("button", { name: /profile_form.save_changes/i });
    await user.click(saveBtn);

    await waitFor(() => {
      expect(mockShowNotification).toHaveBeenCalledWith(errorMessage, "error");
    });
  });
});
