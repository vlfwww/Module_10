import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const MockProtectedPage = () => <div>Protected Content</div>;

describe("ProtectedRoute", () => {
  test("redirects to /signin if user is not authenticated", () => {
    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route path="/signin" element={<div>Sign In Page</div>} />
          <Route
            path="/protected"
            element={
              <ProtectedRoute isAuthenticated={false}>
                <MockProtectedPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Sign In Page")).toBeInTheDocument();
    expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
  });
});
