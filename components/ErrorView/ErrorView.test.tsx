import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorView from "./ErrorView";

describe("ErrorView", () => {
  test("renders title and default message", () => {
    render(<ErrorView />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  test("renders custom message when provided", () => {
    render(<ErrorView message="Custom error text" />);
    expect(screen.getByText("Custom error text")).toBeInTheDocument();
  });

  test("does not show retry button when onRetry is not provided", () => {
    render(<ErrorView />);
    const retryButton = screen.queryByRole("button", { name: /retry/i });
    expect(retryButton).not.toBeInTheDocument();
  });

  test("calls onRetry when button is clicked", async () => {
    const mockOnRetry = jest.fn();
    const user = userEvent.setup();

    render(<ErrorView onRetry={mockOnRetry} />);

    const retryButton = screen.getByRole("button", { name: /retry/i });
    await user.click(retryButton);

    expect(mockOnRetry).toHaveBeenCalledTimes(1);
  });
});
