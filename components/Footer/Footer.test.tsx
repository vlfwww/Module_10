import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("renders with correct content and semantic role", () => {
    render(<Footer />);

    expect(screen.getByText(/sidekick/i)).toBeInTheDocument();

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});
