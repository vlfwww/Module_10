import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    prefetch: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
  })),
}));

describe("Sidebar Component", () => {
  test("renders all navigation links", () => {
    (usePathname as jest.Mock).mockReturnValue("/notes");

    render(<Sidebar />);

    expect(screen.getByText("sidebar.notes")).toBeInTheDocument();
    expect(screen.getByText("sidebar.profile")).toBeInTheDocument();
    expect(screen.getByText("sidebar.archive")).toBeInTheDocument();
    expect(screen.getByText("sidebar.trash")).toBeInTheDocument();
  });

  test("applies the active class to the current path", () => {
    (usePathname as jest.Mock).mockReturnValue("/profile");
    render(<Sidebar />);

    const profileLink = screen.getByText("sidebar.profile");
    expect(profileLink).toHaveClass("active");
  });
});
