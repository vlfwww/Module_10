import { screen } from "@testing-library/react";
import AppLayout from "./AppLayout";
import { renderWithProviders } from "@/utils/testUtils/test-utils";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  usePathname: () => "/",
}));

describe("AppLayout", () => {
  test("renders content and hides sidebar for unauthenticated users", () => {
    renderWithProviders(<AppLayout>Main Content</AppLayout>, { isAuthenticated: false });

    expect(screen.getByText("Main Content")).toBeInTheDocument();
    expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
  });

  test("shows sidebar for authenticated users", () => {
    renderWithProviders(<AppLayout>Main Content</AppLayout>, { isAuthenticated: true });

    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });

  test("applies the theme to the wrapper", () => {
    const { container } = renderWithProviders(<AppLayout>Content</AppLayout>, { theme: "dark" });
    expect(container.firstChild).toHaveAttribute("data-theme", "dark");
  });

  test("hides sidebar if hideSidebar prop is true even for authenticated user", () => {
    renderWithProviders(<AppLayout hideSidebar={true}>Content</AppLayout>, {
      isAuthenticated: true,
    });

    expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
  });
});
