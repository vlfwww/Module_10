import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AuthMessage from "./AuthMessage";

describe("AuthMessage", () => {
  test("renders all links with correct paths", () => {
    render(
      <MemoryRouter>
        <AuthMessage />
      </MemoryRouter>,
    );

    const signInLink = screen.getByRole("link", { name: /auth_message.signin_link/i });
    const signUpLink = screen.getByRole("link", { name: /auth_message.signup_link/i });

    expect(signInLink).toHaveAttribute("href", "/signin");
    expect(signUpLink).toHaveAttribute("href", "/signup");
  });
});
