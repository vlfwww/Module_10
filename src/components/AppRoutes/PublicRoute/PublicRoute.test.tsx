import { MemoryRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import { render, screen } from "@testing-library/react";

describe("PublicRoute", () => {
  test("redirects to homepage if user is already authenticated", () => {
    render(
      <MemoryRouter initialEntries={["/signin"]}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route
            path="/signin"
            element={
              <PublicRoute isAuthenticated={true}>
                <div>Sign In Page</div>
              </PublicRoute>
            }
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Home Page")).toBeInTheDocument();
    expect(screen.queryByText("Sign In Page")).not.toBeInTheDocument();
  });
});
