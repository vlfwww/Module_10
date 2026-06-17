import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NoteModal from "./NoteModal";
import {
  useTodos,
  useToggleChecklistItem,
  useUpdateTodoBackground,
} from "@/hooks/useTodos/useTodos";
import { Todo } from "@/types/notes";

jest.mock("@/hooks/useTodos/useTodos", () => ({
  useTodos: jest.fn(),
  useToggleChecklistItem: jest.fn(),
  useUpdateTodoBackground: jest.fn(),
}));

class MockFileReader {
  onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => void) | null = null;
  result = "data:image/png;base64,mock";

  readAsDataURL = jest.fn(function (this: FileReader) {
    const mockEvent = {} as ProgressEvent<FileReader>;

    this.onload?.call(this, mockEvent);
  });
}
(global as unknown as { FileReader: typeof MockFileReader }).FileReader = MockFileReader;

describe("NoteModal Component", () => {
  const mockSubmit = jest.fn();
  const mockOnClose = jest.fn();
  const mockMutateToggle = jest.fn();
  const mockMutateBg = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useTodos as jest.Mock).mockReturnValue({
      data: { todos: [{ id: 1, items: [{ id: 10, text: "A", isCompleted: false }] }] },
    });
    (useToggleChecklistItem as jest.Mock).mockReturnValue({ mutate: mockMutateToggle });
    (useUpdateTodoBackground as jest.Mock).mockReturnValue({
      mutate: mockMutateBg,
      isPending: false,
    });
  });

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    onSubmit: mockSubmit,
    initialData: null,
  };

  test("renders correctly in creation mode", () => {
    render(<NoteModal {...defaultProps} />);
    expect(screen.getByText(/note_modal.create_title/i)).toBeInTheDocument();
  });

  test("shows validation error on empty submit", async () => {
    const user = userEvent.setup();
    render(<NoteModal {...defaultProps} />);
    await user.click(screen.getByRole("button", { name: /note_modal.create/i }));
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  test("handles background upload and removal", async () => {
    const user = userEvent.setup();

    mockMutateBg.mockImplementation((_, { onSuccess }) => {
      onSuccess({ backgroundImage: "test-image.png" });
    });

    const { container } = render(
      <NoteModal
        {...defaultProps}
        initialData={
          {
            id: 1,
            userId: 1,
            title: "",
            content: "",
            items: [],
            viewType: "grid",
            pageType: "notes",
          } as Todo
        }
      />,
    );

    await user.click(screen.getByLabelText(/note_modal.edit_mode/i));

    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["hello"], "hello.png", { type: "image/png" });

    await user.upload(fileInput, file);
    expect(mockMutateBg).toHaveBeenCalled();

    const removeBtn = await screen.findByTestId("remove-bg");
    await user.click(removeBtn);

    expect(mockMutateBg).toHaveBeenCalledWith(
      expect.objectContaining({ backgroundImage: "none" }),
      expect.any(Object),
    );
  });

  test("submit button is hidden in view mode", () => {
    render(
      <NoteModal
        {...defaultProps}
        initialData={
          {
            id: 1,
            userId: 1,
            title: "",
            content: "",
            items: [],
            viewType: "grid",
            pageType: "notes",
          } as Todo
        }
      />,
    );
    expect(screen.queryByTestId("modal-submit-button")).not.toBeInTheDocument();
  });

  test("renders correct header titles based on state", () => {
    const { rerender } = render(<NoteModal {...defaultProps} />);
    expect(screen.getByText(/note_modal.create_title/i)).toBeInTheDocument();

    rerender(
      <NoteModal
        {...defaultProps}
        initialData={
          {
            id: 1,
            title: "Test Note",
            userId: 1,
            content: "",
            items: [],
            viewType: "grid",
            pageType: "notes",
          } as Todo
        }
      />,
    );
    expect(screen.getByText("Test Note")).toBeInTheDocument();
  });

  test("adds and deletes items in edit mode", async () => {
    const user = userEvent.setup();
    render(<NoteModal {...defaultProps} />);

    await user.click(screen.getByTestId("add-todo-btn"));
    const inputs = screen.getAllByTestId("todo-input");
    const firstInt = inputs[0];
    if (!firstInt) {
      throw new Error("no such element");
    }
    await user.type(firstInt, "Task 1");

    const deleteBtns = screen.getAllByRole("button", { name: /delete/i });
    const firstBtn = deleteBtns[0];
    if (!firstBtn) {
      throw new Error("no such element");
    }
    await user.click(firstBtn);

    expect(screen.queryByDisplayValue("Task 1")).not.toBeInTheDocument();
  });
});
