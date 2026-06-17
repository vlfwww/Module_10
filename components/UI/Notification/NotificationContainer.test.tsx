import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NotificationContainer from "./NotificationContainer";

describe("NotificationContainer", () => {
  const mockNotifications = [
    { id: 1, message: "Error message", type: "error" as const },
    { id: 2, message: "Success message", type: "success" as const },
  ];
  const mockOnClose = jest.fn();

  test("renders notification list", () => {
    render(<NotificationContainer notifications={mockNotifications} onClose={mockOnClose} />);

    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.getByText("Success message")).toBeInTheDocument();
  });

  test("calls onClose with the correct id when clicking the close button", async () => {
    const user = userEvent.setup();
    render(<NotificationContainer notifications={mockNotifications} onClose={mockOnClose} />);

    const closeButtons = screen.getAllByRole("button", { name: /close/i });
    const firstButton = closeButtons[0];

    expect(firstButton).toBeDefined();

    if (firstButton) {
      await user.click(firstButton);
    }

    expect(mockOnClose).toHaveBeenCalledWith(1);
  });

  test("does not render the container if there are no notifications", () => {
    const { container } = render(
      <NotificationContainer notifications={[]} onClose={mockOnClose} />,
    );
    expect(container).toBeEmptyDOMElement();
  });
});
