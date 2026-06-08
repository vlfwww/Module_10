import { render, screen } from "@testing-library/react";
import KebabMenu from "./KebabMenu";
import userEvent from "@testing-library/user-event";

describe("KebabMenu", () => {
  const mockOnDelete = jest.fn();

  test("renders right option when pageType is notes", () => {
    render(<KebabMenu pageType="notes" onDelete={mockOnDelete} />);

    expect(screen.getByText("kebab_menu.delete")).toBeInTheDocument();
  });

  test("renders correct items for trash page", () => {
    render(<KebabMenu pageType="trash" onDelete={mockOnDelete} />);

    expect(screen.getByText("kebab_menu.delete_forever")).toBeInTheDocument();
    expect(screen.queryByText("kebab_menu.archive")).toBeInTheDocument();
    expect(screen.queryByText("kebab_menu.uncheck_all")).not.toBeInTheDocument();
  });

  test("calls action on Space key press", async () => {
    const user = userEvent.setup();
    const mockDelete = jest.fn();
    render(<KebabMenu pageType="notes" onDelete={mockDelete} />);

    const deleteItem = screen.getByText("kebab_menu.delete");
    deleteItem.focus();
    await user.keyboard("{ }");

    expect(mockDelete).toHaveBeenCalledTimes(1);
  });

  test("calls onDelete when delete option is clicked", async () => {
    const user = userEvent.setup();
    render(<KebabMenu pageType="notes" onDelete={mockOnDelete} />);

    const deleteOption = screen.getByText("kebab_menu.delete");
    await user.click(deleteOption);
    expect(mockOnDelete).toHaveBeenCalled();
  });

  test("calls onArchive when Enter is pressed", async () => {
    const user = userEvent.setup();
    const mockArchive = jest.fn();
    render(<KebabMenu pageType="notes" onArchive={mockArchive} />);

    const archiveItem = screen.getByText("kebab_menu.archive");
    archiveItem.focus();
    await user.keyboard("{Enter}");

    expect(mockArchive).toHaveBeenCalledTimes(1);
  });

  test("renders correct items for archive page", () => {
    const mockUnarchive = jest.fn();
    const mockDelete = jest.fn();

    render(<KebabMenu pageType="archive" onUnarchive={mockUnarchive} onDelete={mockDelete} />);

    expect(screen.getByText("kebab_menu.unarchive")).toBeInTheDocument();
    expect(screen.getByText("kebab_menu.delete")).toBeInTheDocument();
  });

  test("calls onUnarchive when clicked", async () => {
    const user = userEvent.setup();
    const mockUnarchive = jest.fn();
    render(<KebabMenu pageType="archive" onUnarchive={mockUnarchive} onDelete={jest.fn()} />);

    const item = screen.getByText("kebab_menu.unarchive");
    await user.click(item);
    expect(mockUnarchive).toHaveBeenCalledTimes(1);
  });

  test("renders uncheck_all button when onUncheckAll prop is provided", () => {
    render(<KebabMenu pageType="notes" onUncheckAll={jest.fn()} />);
    expect(screen.getByText("kebab_menu.uncheck_all")).toBeInTheDocument();
  });

  test("calls onUncheckAll when clicked", async () => {
    const user = userEvent.setup();
    const mockUncheckAll = jest.fn();
    render(<KebabMenu pageType="notes" onUncheckAll={mockUncheckAll} />);

    const btn = screen.getByText("kebab_menu.uncheck_all");
    await user.click(btn);
    expect(mockUncheckAll).toHaveBeenCalledTimes(1);
  });

  test("toggles checkboxes label correctly", () => {
    const { rerender } = render(
      <KebabMenu pageType="notes" showCheckboxes={true} onToggleCheckboxes={jest.fn()} />,
    );
    expect(screen.getByText("kebab_menu.hide_checkboxes")).toBeInTheDocument();

    rerender(<KebabMenu pageType="notes" showCheckboxes={false} onToggleCheckboxes={jest.fn()} />);
    expect(screen.getByText("kebab_menu.show_checkboxes")).toBeInTheDocument();
  });

  test("calls onDelete when permanent delete is clicked in trash", async () => {
    const user = userEvent.setup();
    const mockDelete = jest.fn();
    render(<KebabMenu pageType="trash" onDelete={mockDelete} />);

    const btn = screen.getByTestId("permanent-delete-btn");
    await user.click(btn);
    expect(mockDelete).toHaveBeenCalled();
  });

  test("calls onArchive when archive is clicked in trash", async () => {
    const user = userEvent.setup();
    const mockArchive = jest.fn();
    render(<KebabMenu pageType="trash" onArchive={mockArchive} />);

    const btn = screen.getByText("kebab_menu.archive");
    await user.click(btn);
    expect(mockArchive).toHaveBeenCalled();
  });
  test("calls onUnarchive on Enter key press in archive page", async () => {
    const user = userEvent.setup();
    const mockUnarchive = jest.fn();
    render(<KebabMenu pageType="archive" onUnarchive={mockUnarchive} onDelete={jest.fn()} />);

    const btn = screen.getByTestId("unarchive-note-btn");
    btn.focus();
    await user.keyboard("{Enter}");

    expect(mockUnarchive).toHaveBeenCalled();
  });

  test("calls onDelete on Space key press in archive page", async () => {
    const user = userEvent.setup();
    const mockDelete = jest.fn();
    render(<KebabMenu pageType="archive" onUnarchive={jest.fn()} onDelete={mockDelete} />);

    const btn = screen.getByText("kebab_menu.delete");
    btn.focus();
    await user.keyboard(" ");

    expect(mockDelete).toHaveBeenCalled();
  });
});
