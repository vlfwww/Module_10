import { render, screen } from "@testing-library/react";
import ChecklistSection from "./ChecklistSection";
import userEvent from "@testing-library/user-event";
import { CheckListItem } from "@/types/notes";

describe("ChecklistSection", () => {
  const mockItems = [
    { id: 1, text: "Complete task 1", isCompleted: false },
    { id: 2, text: "Complete task 2", isCompleted: false },
  ];

  test("renders correct number of items", () => {
    render(<ChecklistSection items={mockItems} onTextChange={jest.fn()} onDelete={jest.fn()} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  });

  test("calls onDelete when delete button is clicked", async () => {
    const mockOnDelete = jest.fn();
    const user = userEvent.setup();

    render(<ChecklistSection items={mockItems} onTextChange={jest.fn()} onDelete={mockOnDelete} />);

    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    const firstButton = deleteButtons[0];
    if (firstButton) {
      await user.click(firstButton);
    }

    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  test("skips rendering when item is null", () => {
    const itemsWithNull = [{ id: 1, text: "Valid", isCompleted: false }, null];

    render(
      <ChecklistSection
        items={itemsWithNull as CheckListItem[]}
        onTextChange={jest.fn()}
        onDelete={jest.fn()}
      />,
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(1);
  });

  test("calls onTextChange when input value changes", async () => {
    const mockOnTextChange = jest.fn();
    const user = userEvent.setup();

    render(
      <ChecklistSection
        items={[{ id: 1, text: "Old Text", isCompleted: false }]}
        onTextChange={mockOnTextChange}
        onDelete={jest.fn()}
      />,
    );

    const input = screen.getByTestId("todo-input");

    await user.type(input, "New Text");
    expect(mockOnTextChange).toHaveBeenCalledTimes(8);
  });
});
