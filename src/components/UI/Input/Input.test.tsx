import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";
import React from "react";

describe("Input Component", () => {
  test("toggles the visibility of the password when clicking the icon", async () => {
    const user = userEvent.setup();

    render(<Input label="Password" type="password" />);

    const input = screen.getByPlaceholderText("input.enter password");
    const toggleButton = screen.getByRole("button", { name: "input.toggle_password" });

    expect(input).toHaveAttribute("type", "password");

    await user.click(toggleButton);

    expect(input).toHaveAttribute("type", "text");
  });

  test("shows the error message when it is present", () => {
    render(<Input label="Password" isError errorMessage="Wrong password" />);
    const errorMessage = screen.getByText("Wrong password");

    expect(errorMessage).toBeInTheDocument();
  });

  test("shows the strong password message during signup", () => {
    render(<Input label="Password" type="password" isValid={true} pageType="signup" />);

    expect(screen.getByText("input.password_strong")).toBeInTheDocument();
  });

  test("does not show the success checkmark on the signin page, even if valid data is entered", () => {
    render(<Input label="Email" isValid={true} pageType="signin" />);

    const successIcon = screen.queryByAltText("✓");
    expect(successIcon).not.toBeInTheDocument();
  });

  test("passes the ref to the input element", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input label="RefTest" ref={ref} />);

    expect(ref.current?.tagName).toBe("INPUT");
  });

  test("calls onChange when user types", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input label="Email" onChange={handleChange} />);

    const input = screen.getByPlaceholderText(/input.enter email/i);

    await user.type(input, "test@example.com");

    expect(handleChange).toHaveBeenCalledTimes("test@example.com".length);
    expect(handleChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "test@example.com" }),
      }),
    );
  });

  test("does not show strong password message on the signin page", () => {
    render(<Input label="Password" type="password" isValid={true} pageType="signin" />);

    expect(screen.queryByText("input.password_strong")).not.toBeInTheDocument();
  });
});
