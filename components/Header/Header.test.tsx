import { act, screen, waitForElementToBeRemoved, within } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders } from "@/utils/testUtils/test-utils";
import userEvent from "@testing-library/user-event";
import style from "./Header.module.css";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

describe("Header Component", () => {
  const mockAuthValue = {
    isAuthenticated: true,
    user: { id: "1", username: "TestUser" },
    logout: jest.fn(),
  };

  test("renders signin/signup links when NOT authenticated", () => {
    renderWithProviders(<Header pageType="notes" />, { isAuthenticated: false });

    const signinLinks = screen.getAllByText(/header.signin/i);
    expect(signinLinks.length).toBe(2);

    const signupLinks = screen.getAllByText(/header.signup/i);
    expect(signupLinks.length).toBe(2);
  });

  test("renders user avatar and name when authenticated", () => {
    renderWithProviders(<Header pageType="notes" />, { authValue: mockAuthValue });

    expect(screen.getByText("TestUser")).toBeInTheDocument();
    expect(screen.getByAltText("User")).toBeInTheDocument();
  });

  test("toggles profile menu when avatar is clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Header pageType="notes" />, { authValue: mockAuthValue });

    const username = screen.getByText("TestUser");
    expect(username.parentElement).toBeInTheDocument();
    const profileContainer = username.parentElement as HTMLElement;

    await user.click(profileContainer);

    const menu = await screen.findByRole("menu", {}, { timeout: 2000 });
    expect(menu).toBeInTheDocument();
  });

  test("closes profile menu when clicking outside", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Header pageType="notes" />, { authValue: mockAuthValue });

    const username = screen.getByText("TestUser");
    const profileContainer = username.parentElement;
    expect(profileContainer).toBeInTheDocument();
    await user.click(profileContainer as HTMLElement);

    const menu = await screen.findByRole("menu");
    expect(menu).toBeInTheDocument();

    await user.click(document.body);

    await waitForElementToBeRemoved(() => screen.queryByRole("menu"), {
      timeout: 2000,
    });

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  test("calls logout function when logout button is clicked in menu", async () => {
    const user = userEvent.setup();
    const mockLogout = jest.fn();

    renderWithProviders(<Header pageType="notes" />, {
      authValue: { ...mockAuthValue, logout: mockLogout },
    });

    const username = screen.getByText("TestUser");
    const profileContainer = username.parentElement;
    expect(profileContainer).toBeInTheDocument();
    await user.click(profileContainer as HTMLElement);

    const logoutButton = await screen.findByText("header.logout");

    await user.click(logoutButton);

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });

  test("toggles profile menu when avatar is clicked", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    jest.useFakeTimers();

    renderWithProviders(<Header pageType="notes" />, { authValue: mockAuthValue });

    const profileContainer = screen.getByText("TestUser").parentElement as HTMLElement;
    await user.click(profileContainer);

    act(() => {
      jest.runAllTimers();
    });

    const menu = await screen.findByRole("menu");
    expect(menu).toBeInTheDocument();

    jest.useRealTimers();
  });

  test("closes mobile menu when clicking a link inside", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Header pageType="notes" />, { isAuthenticated: false });

    const navs = screen.getAllByRole("navigation", { hidden: true });
    const mobileMenu = navs.find((nav) => nav.classList.contains(style.mobileMenu));
    expect(mobileMenu).toBeDefined();

    const burgerButton = screen.getByRole("button", { name: /header.menu/i });
    await user.click(burgerButton);

    const signInLink = within(mobileMenu as HTMLElement).getByRole("link", {
      name: /header.signin/i,
    });
    await user.click(signInLink);

    expect(mobileMenu).not.toHaveClass("open");
  });
});
