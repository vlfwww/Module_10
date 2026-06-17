import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProfileSettings from "./ProfileSettings";
import { renderWithProviders } from "@/utils/testUtils/test-utils";
import * as hooks from "@/hooks/useTodos/useTodos";
import { useTranslation } from "react-i18next";

const mockChangeLanguage = jest.fn();

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      language: "en",
      changeLanguage: mockChangeLanguage,
    },
  }),
}));

jest.mock("@/hooks/useTodos/useTodos");

describe("ProfileSettings Component", () => {
  const mockMutate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (hooks.useUpdateGlobalBackground as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
    });
  });

  test("renders settings fields correctly", () => {
    renderWithProviders(<ProfileSettings />);
    expect(screen.getAllByText(/settings.language/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/settings.theme/i)).toBeInTheDocument();
    expect(screen.getByText(/settings.font_size/i)).toBeInTheDocument();
    expect(screen.getByText(/settings.upload_title/i)).toBeInTheDocument();
  });

  test("handles font size change on blur", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ProfileSettings />);
    const input = screen.getByPlaceholderText(/input.enter settings.font_size/i);

    await user.clear(input);
    await user.type(input, "1.5");
    fireEvent.blur(input);

    expect(input).toHaveValue(1.5);
  });

  test("calls file upload when a file is uploaded", async () => {
    const { container } = renderWithProviders(<ProfileSettings />);
    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["dummy content"], "example.png", { type: "image/png" });

    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalled();
    });
  });

  test("shows uploading state during file upload", () => {
    (hooks.useUpdateGlobalBackground as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: true,
    });
    renderWithProviders(<ProfileSettings />);
    expect(screen.getByText(/settings.uploading/i)).toBeInTheDocument();
  });

  test("toggles theme when switch is clicked", async () => {
    const user = userEvent.setup();
    const { mockSettings } = renderWithProviders(<ProfileSettings />);

    const themeSwitch = screen.getByLabelText(/settings.theme/i);
    await user.click(themeSwitch);

    expect(mockSettings.toggleTheme).toHaveBeenCalled();
  });

  test("toggles list view when switch is clicked", async () => {
    const user = userEvent.setup();
    const { mockSettings } = renderWithProviders(<ProfileSettings />);

    const listSwitch = screen.getByLabelText(/settings.list_view/i);
    await user.click(listSwitch);

    expect(mockSettings.toggleView).toHaveBeenCalled();
  });

  test("changes language on select change", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ProfileSettings />);
    const { i18n } = useTranslation();

    const select = screen.getByRole("combobox", { name: /settings.language/i });
    await user.click(select);

    const ruOption = await screen.findByRole("option", { name: /Русский/i });
    await user.click(ruOption);

    expect(i18n.changeLanguage).toHaveBeenCalledWith("ru");
  });

  test("validates file type (negative test)", async () => {
    const { container } = renderWithProviders(<ProfileSettings />);
    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["dummy content"], "test.txt", { type: "text/plain" });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(mockMutate).not.toHaveBeenCalled();
  });

  test("validates file size", async () => {
    const { container } = renderWithProviders(<ProfileSettings />);
    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    const bigFile = new File(["a".repeat(11 * 1024 * 1024)], "large.png", { type: "image/png" });

    fireEvent.change(fileInput, { target: { files: [bigFile] } });

    expect(mockMutate).not.toHaveBeenCalled();
  });

  test("clamps font size to valid range", async () => {
    const user = userEvent.setup();
    renderWithProviders(<ProfileSettings />);
    const input = screen.getByPlaceholderText(/input.enter settings.font_size/i);

    await user.clear(input);
    await user.type(input, "0.5");
    fireEvent.blur(input);
    expect(input).toHaveValue(0.8);

    await user.clear(input);
    await user.type(input, "5.0");
    fireEvent.blur(input);
    expect(input).toHaveValue(2);
  });

  test("handles drag and drop interactions", async () => {
    renderWithProviders(<ProfileSettings />);
    const dropZone = screen.getByRole("button", { name: /settings.upload_title/i });
    const file = new File(["dummy"], "test.png", { type: "image/png" });

    fireEvent.dragEnter(dropZone);
    fireEvent.dragLeave(dropZone);

    fireEvent.drop(dropZone, {
      dataTransfer: {
        files: [file],
      },
    });

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalled();
    });
  });

  test("does not call handleFile if no file is selected in input", () => {
    const { container } = renderWithProviders(<ProfileSettings />);
    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;

    fireEvent.change(fileInput, { target: { files: [] } });

    expect(mockMutate).not.toHaveBeenCalled();
  });
});
