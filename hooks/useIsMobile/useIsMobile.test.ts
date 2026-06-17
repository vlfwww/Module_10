import { renderHook, act } from "@testing-library/react";
import { useIsMobile } from "./useIsMobile";

describe("useIsMobile", () => {
  const originalWidth = window.innerWidth;

  afterAll(() => {
    window.innerWidth = originalWidth;
  });

  test("should return true if window innerWidth is less than breakpoint", () => {
    window.innerWidth = 300;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  test("should return false if window innerWidth is greater than breakpoint", () => {
    window.innerWidth = 1024;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  test("should update state on window resize", () => {
    window.innerWidth = 1024;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => {
      window.innerWidth = 300;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toBe(true);
  });
});
