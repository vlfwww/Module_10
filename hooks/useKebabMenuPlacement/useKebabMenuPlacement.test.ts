import { renderHook, act } from "@testing-library/react";
import { useKebabMenuPlacement } from "./useKebabMenuPlacement";
import { computeMenuPlacement } from "../../utils/menuPlacement/menuPlacement";

jest.mock("../../utils/menuPlacement/menuPlacement");

describe("useKebabMenuPlacement", () => {
  let anchorRef: { current: HTMLElement | null };
  let menuRef: { current: HTMLElement | null };

  beforeEach(() => {
    jest.clearAllMocks();

    const anchorEl = document.createElement("div");
    const menuEl = document.createElement("div");

    anchorRef = { current: anchorEl };
    menuRef = { current: menuEl };

    anchorEl.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      left: 100,
      width: 50,
      height: 50,
      bottom: 150,
      right: 150,
    });
    menuEl.getBoundingClientRect = jest.fn().mockReturnValue({
      width: 100,
      height: 200,
    });
  });

  test("should compute placement when open", () => {
    (computeMenuPlacement as jest.Mock).mockReturnValue("top-left");

    const { result } = renderHook(() => useKebabMenuPlacement(true, anchorRef, menuRef));

    expect(computeMenuPlacement).toHaveBeenCalled();
    expect(result.current).toBe("top-left");
  });

  test("should not compute placement when closed", () => {
    renderHook(() => useKebabMenuPlacement(false, anchorRef, menuRef));
    expect(computeMenuPlacement).not.toHaveBeenCalled();
  });

  test("should update placement on window resize", () => {
    (computeMenuPlacement as jest.Mock).mockReturnValue("bottom-right");

    renderHook(() => useKebabMenuPlacement(true, anchorRef, menuRef));

    (computeMenuPlacement as jest.Mock).mockReturnValue("top-right");

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    expect(computeMenuPlacement).toHaveBeenCalledTimes(2);
  });
});
