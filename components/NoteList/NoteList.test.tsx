import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NoteList from "./NoteList";
import * as hooks from "../../hooks/useTodos/useTodos";
import { UseMutationResult } from "@tanstack/react-query";

jest.mock("../../hooks/useTodos/useTodos", () => ({
  __esModule: true,
  useToggleChecklistItem: () => ({ mutate: jest.fn() }),
  useUncheckAllItems: () => ({ mutate: jest.fn() }),
}));

describe("NoteList Component", () => {
  const defaultProps = {
    id: 1,
    title: "Test Note",
    content: "Content",
    pageType: "notes" as const,
    onDelete: jest.fn(),
    onEdit: jest.fn(),
    items: [{ id: 1, text: "Item 1", isCompleted: true }],
    viewType: "grid" as const,
  };

  test("toggles kebab menu on click", async () => {
    const user = userEvent.setup();
    render(<NoteList {...defaultProps} />);

    const menuButton = screen.getByLabelText(/note_list.menu_label/i);
    await user.click(menuButton);

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  test("triggers onEdit when card is clicked in notes page", async () => {
    const user = userEvent.setup();
    const handleEdit = jest.fn();
    render(<NoteList {...defaultProps} onEdit={handleEdit} />);

    await user.click(screen.getByText("Test Note"));
    expect(handleEdit).toHaveBeenCalled();
  });

  test("does not trigger onEdit if pageType is not 'notes'", async () => {
    const user = userEvent.setup();
    const handleEdit = jest.fn();
    render(<NoteList {...defaultProps} pageType="archive" onEdit={handleEdit} />);

    await user.click(screen.getByText("Test Note"));
    expect(handleEdit).not.toHaveBeenCalled();
  });

  test("shows 'Uncheck all' only when checkboxes are enabled and items are checked", async () => {
    const user = userEvent.setup();

    render(<NoteList {...defaultProps} items={[{ id: 1, text: "Task", isCompleted: true }]} />);

    const menuButton = screen.getByLabelText(/note_list.menu_label/i);
    await user.click(menuButton);

    const toggleBtn = screen.getByText(/kebab_menu.show_checkboxes/i);
    await user.click(toggleBtn);

    await user.click(menuButton);

    expect(screen.getByText(/kebab_menu.uncheck_all/i)).toBeInTheDocument();
  });

  test("calls uncheckAllItems when 'Uncheck all' is clicked in menu", async () => {
    const user = userEvent.setup();
    const mockUncheckAll = jest.fn();

    jest.spyOn(hooks, "useUncheckAllItems").mockReturnValue({
      mutate: mockUncheckAll,
    } as unknown as UseMutationResult<unknown, Error, number, unknown>);

    render(<NoteList {...defaultProps} items={[{ id: 1, text: "Task", isCompleted: true }]} />);

    await user.click(screen.getByLabelText(/note_list.menu_label/i));

    await user.click(screen.getByText(/kebab_menu.show_checkboxes/i));

    await user.click(screen.getByLabelText(/note_list.menu_label/i));

    const uncheckBtn = screen.getByText(/kebab_menu.uncheck_all/i);
    await user.click(uncheckBtn);

    expect(mockUncheckAll).toHaveBeenCalledWith(1);
  });

  test("calls toggleTodoItem when a checkbox is clicked", async () => {
    const user = userEvent.setup();
    const mockToggle = jest.fn();

    jest.spyOn(hooks, "useToggleChecklistItem").mockReturnValue({
      mutate: mockToggle,
    } as unknown as UseMutationResult<unknown, Error, { todoId: number; itemId: number }, unknown>);

    render(<NoteList {...defaultProps} items={[{ id: 1, text: "Task", isCompleted: false }]} />);

    await user.click(screen.getByLabelText(/note_list.menu_label/i));
    await user.click(screen.getByText(/kebab_menu.show_checkboxes/i));

    await user.click(screen.getByRole("checkbox"));

    expect(mockToggle).toHaveBeenCalledWith({ todoId: 1, itemId: 1 });
  });

  test("calls onDelete when delete is clicked in menu", async () => {
    const user = userEvent.setup();
    const mockDelete = jest.fn();
    render(<NoteList {...defaultProps} onDelete={mockDelete} />);

    await user.click(screen.getByLabelText(/note_list.menu_label/i));
    const deleteBtn = await screen.findByText(/kebab_menu.delete/i);
    await user.click(deleteBtn);

    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});
