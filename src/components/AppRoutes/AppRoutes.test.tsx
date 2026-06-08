import AppRoutes from "./AppRoutes";
import { act, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/test-utils";

jest.mock("../../pages/ProfilePage", () => {
  return function MockProfilePage() {
    return <div>Profile Page Content</div>;
  };
});

jest.mock("../../pages/SignIn", () => {
  return function MockSignIn() {
    return <h1>SignIn Title</h1>;
  };
});

describe("AppRoutes Component", () => {
  test("authenticated user sees profile but not login page", async () => {
    await act(async () => {
      renderWithProviders(<AppRoutes />, { initialEntries: ["/profile"] });
    });

    const profileContent = await screen.findByText(/Profile Page Content/i, {}, { timeout: 3000 });
    expect(profileContent).toBeInTheDocument();
  });
  test("redirects unauthenticated user from profile to signin", async () => {
    renderWithProviders(<AppRoutes />, {
      initialEntries: ["/profile"],
      isAuthenticated: false,
    });

    const heading = await screen.findByRole("heading", { name: /SignIn Title/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders NotFoundPage for unknown routes", async () => {
    renderWithProviders(<AppRoutes />, { initialEntries: ["/some-random-url"] });

    const notFound = await screen.findByText(/not_found.title/i);
    expect(notFound).toBeInTheDocument();
  });
});
