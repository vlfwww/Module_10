import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textarea from "./Textarea";

describe("Textarea Component", () => {
  test("renders the label and initial message", () => {
    render(<Textarea label="Description" />);
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText(/Max 200 chars/i)).toBeInTheDocument();
  });

  test("shows an error when the 200 character limit is reached", async () => {
    const user = userEvent.setup();
    const longText = "a".repeat(200);

    render(<Textarea label="Description" value={longText} onChange={jest.fn()} />);

    const textarea = screen.getByRole("textbox");
    await user.click(textarea);

    expect(screen.getByText(/Reached the 200 text limit/i)).toBeInTheDocument();
    expect(textarea).toHaveClass("inputError");
  });

  test("calls onFocus and onBlur", async () => {
    const user = userEvent.setup();
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();

    render(<Textarea label="Test" onFocus={handleFocus} onBlur={handleBlur} />);

    const textarea = screen.getByRole("textbox");

    await user.click(textarea);
    expect(handleFocus).toHaveBeenCalled();

    await user.tab();
    expect(handleBlur).toHaveBeenCalled();
  });
});
