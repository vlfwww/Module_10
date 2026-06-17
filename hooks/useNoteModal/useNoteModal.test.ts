import { renderHook, act } from "@testing-library/react";
import { useNoteModal } from "./useNoteModal";
import * as hooks from "@/hooks/useTodos/useTodos";
import { Todo } from "@/types/notes";

jest.mock("@/hooks/useTodos/useTodos");

describe("useNoteModal", () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (hooks.useToggleChecklistItem as jest.Mock).mockReturnValue({ mutate: jest.fn() });
    (hooks.useTodos as jest.Mock).mockReturnValue({ data: { todos: [] } });
    (hooks.useUpdateTodoBackground as jest.Mock).mockReturnValue({ mutate: jest.fn() });
  });

  test("should initialize with empty state if no initialData", () => {
    const { result } = renderHook(() =>
      useNoteModal({ isOpen: true, onSubmit: mockSubmit, initialData: null }),
    );

    expect(result.current.title).toBe("");
    expect(result.current.isEditMode).toBe(true);
  });

  test("should handle adding a checklist item", () => {
    const { result } = renderHook(() =>
      useNoteModal({ isOpen: true, onSubmit: mockSubmit, initialData: null }),
    );

    act(() => {
      result.current.handleAddItem();
    });

    expect(result.current.modalItems).toHaveLength(1);
    expect(result.current.modalItems[0].text).toBe("");
  });

  test("should show validation error if form is empty on submit", () => {
    const { result } = renderHook(() =>
      useNoteModal({ isOpen: true, onSubmit: mockSubmit, initialData: null }),
    );

    act(() => {
      result.current.handleFormSubmit({ preventDefault: jest.fn() } as any);
    });

    expect(result.current.validationError).toBe("The note cannot be empty.");
  });

  test("should call toggleTodoItem when checkbox is clicked", () => {
    const mockMutate = jest.fn();
    const initialData = { id: 123 } as Todo;

    (hooks.useToggleChecklistItem as jest.Mock).mockReturnValue({ mutate: mockMutate });

    const { result } = renderHook(() =>
      useNoteModal({
        isOpen: true,
        onSubmit: mockSubmit,
        initialData: initialData,
      }),
    );

    act(() => {
      result.current.handleCheckboxToggle(1);
    });

    expect(mockMutate).toHaveBeenCalledWith({ todoId: 123, itemId: 1 }, expect.anything());
  });

  test("should reset state when modal is closed", () => {
    const { result, rerender } = renderHook(
      ({ isOpen }) => useNoteModal({ isOpen, onSubmit: mockSubmit, initialData: null }),
      { initialProps: { isOpen: true } },
    );

    act(() => {
      result.current.handleAddItem();
    });
    expect(result.current.modalItems).toHaveLength(1);

    rerender({ isOpen: false });

    expect(result.current.modalItems).toHaveLength(0);
    expect(result.current.title).toBe("");
  });

  test("should update content on input change", () => {
    const { result } = renderHook(() =>
      useNoteModal({ isOpen: true, onSubmit: mockSubmit, initialData: null }),
    );

    act(() => {
      result.current.handleContentChange({ target: { value: "New Content" } } as any);
    });

    expect(result.current.content).toBe("New Content");
  });
});
