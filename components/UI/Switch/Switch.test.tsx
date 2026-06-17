import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Switch from "./Switch";

describe("Switch Component", () => {
  test("toggles the checked state when the label is clicked", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Switch label="Dark Mode" checked={false} onChange={handleChange} />);

    const label = screen.getByText(/dark mode/i);
    await user.click(label);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("the input has the correct checked state", () => {
    const { rerender } = render(<Switch checked={true} onChange={jest.fn()} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();

    rerender(<Switch checked={false} onChange={jest.fn()} />);
    expect(checkbox).not.toBeChecked();
  });
});
