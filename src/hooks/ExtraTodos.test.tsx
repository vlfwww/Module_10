import { getByTestId, render, screen } from "@testing-library/react";
import ExtraTodos from "./ExtraTodos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mockTodos = [
  { id: 1, title: "Todo-1" },
  { id: 2, title: "Todo-2" },
];

jest.mock("./index.tsx", () => ({
  useExtraTodos: () => ({
    data: mockTodos,
    isLoading: false,
  }),
}));

const client = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

const renderWithProviders = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

describe("Extra Todos component", () => {
  test("render component successfully", async () => {
    render(<ExtraTodos />, { wrapper: renderWithProviders });

    const message = screen.getByTestId("main-message");
    expect(message).toBeInTheDocument();

    const todos = screen.getAllByText(/Todo-/i);
    expect(todos.length).toEqual(mockTodos.length);
  });
});
