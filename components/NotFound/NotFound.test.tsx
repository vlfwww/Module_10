import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { SettingsProvider } from "../../context/SettingsContext";

describe("NotFound", () => {
  test("renders with correct accessibility roles and content", () => {
    render(
      <SettingsProvider>
        <NotFound />
      </SettingsProvider>,
    );

    expect(screen.getByRole("main")).toBeInTheDocument();

    const title = screen.getByRole("status");
    expect(title).toHaveTextContent("not_found.title");
  });
});
