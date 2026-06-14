import { renderHook } from "@testing-library/react";
import { useStatistics } from "./useStatistics";
import { useTodos } from "../useTodos/useTodos";

jest.mock("../useTodos/useTodos");

describe("useStatistics hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("calculates statistics correctly based on mock todos", () => {
    const now = new Date();
    const isoDate = now.toISOString();

    const mockTodos = [
      { id: 1, status: "NOTES", createdAt: isoDate },
      { id: 2, status: "ARCHIVED", createdAt: isoDate },
      { id: 3, status: "TRASH", createdAt: isoDate },
    ];

    (useTodos as jest.Mock).mockImplementation((status) => {
      if (status === "NOTES") return { data: { todos: [mockTodos[0]] } };
      if (status === "ARCHIVED") return { data: { todos: [mockTodos[1]] } };
      if (status === "TRASH") return { data: { todos: [mockTodos[2]] } };
      return { data: { todos: [] } };
    });

    const { result } = renderHook(() => useStatistics());

    const stats = result.current;

    expect(stats.cardInfo?.[0]?.value).toBe(3);
    expect(stats.cardInfo?.[1]?.value).toBe(1);
    expect(stats.cardInfo?.[2]?.value).toBe(1);

    expect(result.current.chartData.length).toBe(1);
    expect(stats.chartData?.[0]?.created).toBe(3);
  });

  test("returns empty state when no todos are present", () => {
    (useTodos as jest.Mock).mockReturnValue({ data: { todos: [] } });

    const { result } = renderHook(() => useStatistics());

    const stats = result.current;

    expect(stats.cardInfo?.[0]?.value).toBe(0);
    expect(stats.cardInfo?.[1]?.value).toBe(0);
    expect(stats.cardInfo?.[2]?.value).toBe(0);

    expect(result.current.chartData).toEqual([]);
  });

  test("ignores todos without createdAt", () => {
    (useTodos as jest.Mock).mockReturnValue({
      data: { todos: [{ id: 99, status: "NOTES", createdAt: null }] },
    });

    const { result } = renderHook(() => useStatistics());

    const stats = result.current;

    expect(stats.cardInfo?.[0]?.value).toBe(0);
  });
});
