import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

describe("Sidebar Component", () => {
  test("renders all navigation links", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );

    expect(screen.getByText("sidebar.notes")).toBeInTheDocument();
    expect(screen.getByText("sidebar.profile")).toBeInTheDocument();
    expect(screen.getByText("sidebar.archive")).toBeInTheDocument();
    expect(screen.getByText("sidebar.trash")).toBeInTheDocument();
  });

  test("applies the active class to the current path", () => {
    render(
      <MemoryRouter initialEntries={["/profile"]}>
        <Sidebar />
      </MemoryRouter>,
    );

    const profileLink = screen.getByText("sidebar.profile");
    expect(profileLink).toHaveClass("active");
  });
});
