import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader Component", () => {
  test("displays default text if message prop is not passed", () => {
    render(<Loader />);
    expect(screen.getByText("loader.loading")).toBeInTheDocument();
  });

  test("displays custom text if message prop is passed", () => {
    const customMessage = "Loading data...";
    render(<Loader message={customMessage} />);
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });
});
