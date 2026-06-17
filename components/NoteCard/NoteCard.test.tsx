import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NoteCard from "./NoteCard";
import { CheckListItem } from "@/types/notes";

describe("NoteCard Component", () => {
  const mockItems = [
    { id: 1, text: "Task 1", isCompleted: false },
    { id: 2, text: "Task 2", isCompleted: true },
  ];

  const defaultProps = {
    noteId: 1,
    showCheckboxes: false,
    onCheckboxChange: jest.fn(),
    content: "Test content",
    items: [],
  };

  test("renders content when showCheckboxes is false", () => {
    render(<NoteCard {...defaultProps} />);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  test("renders 'no description' when content is empty and showCheckboxes is false", () => {
    render(<NoteCard {...defaultProps} content="" />);
    expect(screen.getByText("note_card.no_description")).toBeInTheDocument();
  });

  test("renders list of items when showCheckboxes is true", () => {
    render(<NoteCard {...defaultProps} showCheckboxes={true} items={mockItems} />);

    expect(screen.getByLabelText("Task 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Task 2")).toBeInTheDocument();
    expect(screen.getByLabelText("Task 2")).toBeChecked();
  });

  test("calls onCheckboxChange when clicked", async () => {
    const user = userEvent.setup();
    const handleCheckboxChange = jest.fn();

    render(
      <NoteCard
        {...defaultProps}
        showCheckboxes={true}
        items={mockItems}
        onCheckboxChange={handleCheckboxChange}
      />,
    );

    await user.click(screen.getByLabelText("Task 1"));
    expect(handleCheckboxChange).toHaveBeenCalledWith(1);
  });

  test("renders 'no items' message when items list is empty and showCheckboxes is true", () => {
    render(<NoteCard {...defaultProps} showCheckboxes={true} items={[]} />);
    expect(screen.getByText("note_card.no_items")).toBeInTheDocument();
  });

  test("safely handles non-array items by defaulting to empty array", () => {
    render(
      <NoteCard
        {...defaultProps}
        showCheckboxes={true}
        items={null as unknown as CheckListItem[]}
      />,
    );
    expect(screen.getByText("note_card.no_items")).toBeInTheDocument();
  });
});
