import { renderHook, waitFor } from "@testing-library/react";
import {
  useTodos,
  useDeleteTodos,
  useChangeTodoStatus,
  useCreateTodo,
  useUpdateTodo,
  useToggleChecklistItem,
  useUncheckAllItems,
  useDeleteAllTrash,
  useUnarchiveAll,
  useUpdateGlobalBackground,
  useUpdateTodoBackground,
} from "./useTodos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { graphqlRequest } from "../../api/graphqlClient";
import axios from "axios";
import { ReactNode } from "react";

jest.mock("../../api/graphqlClient");
jest.mock("axios");

describe("Todos Hooks Comprehensive Test", () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("useTodos fetches list", async () => {
    (graphqlRequest as jest.Mock).mockResolvedValue({ todos: [] });
    const { result } = renderHook(() => useTodos("NOTES"), { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  test("useDeleTodos", async () => {
    const { result } = renderHook(() => useDeleteTodos(), { wrapper });
    await result.current.mutateAsync(1);
    expect(graphqlRequest).toHaveBeenCalled();
  });

  test("useChangeTodoStatus", async () => {
    const { result } = renderHook(() => useChangeTodoStatus(), { wrapper });
    await result.current.mutateAsync({ id: 1, newStatus: "ARCHIVED" });
    expect(graphqlRequest).toHaveBeenCalled();
  });

  test("useCreateTodo", async () => {
    const { result } = renderHook(() => useCreateTodo(), { wrapper });
    await result.current.mutateAsync({ title: "Test" });
    expect(graphqlRequest).toHaveBeenCalled();
  });

  test("useUpdateTodo", async () => {
    const { result } = renderHook(() => useUpdateTodo(), { wrapper });
    await result.current.mutateAsync({ id: 1, input: { title: "Upd" } });
    expect(graphqlRequest).toHaveBeenCalled();
  });

  test("useToggleChecklistItem", async () => {
    const { result } = renderHook(() => useToggleChecklistItem(), { wrapper });
    await result.current.mutateAsync({ todoId: 1, itemId: 2 });
    expect(graphqlRequest).toHaveBeenCalled();
  });

  test("useUncheckAllItems", async () => {
    const { result } = renderHook(() => useUncheckAllItems(), { wrapper });
    await result.current.mutateAsync(1);
    expect(graphqlRequest).toHaveBeenCalled();
  });

  test("useDeleteAllTrash", async () => {
    const { result } = renderHook(() => useDeleteAllTrash(), { wrapper });
    await result.current.mutateAsync([{ id: 1 }]);
    expect(graphqlRequest).toHaveBeenCalledWith(expect.stringContaining("delete_1"), {});
  });

  test("useUnarchiveAll", async () => {
    const { result } = renderHook(() => useUnarchiveAll(), { wrapper });
    await result.current.mutateAsync([{ id: 1 }]);
    expect(graphqlRequest).toHaveBeenCalledWith(expect.stringContaining("unarchive_1"), {});
  });

  test("useUpdateGlobalBackground", async () => {
    (axios.put as jest.Mock).mockResolvedValue({ data: {} });
    const { result } = renderHook(() => useUpdateGlobalBackground(), { wrapper });
    await result.current.mutateAsync("base64");
    expect(axios.put).toHaveBeenCalled();
  });

  test("useUpdateTodoBackground", async () => {
    const { result } = renderHook(() => useUpdateTodoBackground(), { wrapper });
    await result.current.mutateAsync({ id: 1, backgroundImage: "url" });
    expect(graphqlRequest).toHaveBeenCalled();
  });
});
