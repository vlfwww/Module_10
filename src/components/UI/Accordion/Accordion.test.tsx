import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "./Accordion";
import style from "./Accordion.module.css";

describe("Accordion Component", () => {
  test("renders the title and content", () => {
    render(<Accordion title="My Title">Accordion Content</Accordion>);

    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.getByText("Accordion Content")).toBeInTheDocument();
  });

  test("toggles the state when clicking the title", async () => {
    const user = userEvent.setup();
    render(
      <Accordion title="Toggle me" defaultOpen={false}>
        Content
      </Accordion>,
    );

    const button = screen.getByRole("button", { name: /toggle me/i });
    expect(button).toHaveAttribute("aria-expanded", "false");

    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  test("applies correct classes based on state", async () => {
    const user = userEvent.setup();
    render(
      <Accordion title="Test" defaultOpen={true}>
        Content
      </Accordion>,
    );

    const contentWrapper = screen.getByText("Content").closest(`.${style.contentWrapper}`);

    expect(contentWrapper).toHaveClass(style.open);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(contentWrapper).toHaveClass(style.collapsed);
  });
});
