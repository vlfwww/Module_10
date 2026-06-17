import { renderHook } from "@testing-library/react";
import { useClickOutside } from "./useClickOutside";

describe("useClickOutside", () => {
  let container: HTMLElement;
  let onClickOutside: jest.Mock;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    onClickOutside = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(container);
    jest.clearAllMocks();
  });

  test("should call onClickOutside when clicking outside the ref", () => {
    const ref = { current: container };

    renderHook(() => useClickOutside(ref, true, onClickOutside));

    document.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(onClickOutside).toHaveBeenCalledTimes(1);
  });

  test("should NOT call onClickOutside when clicking inside the ref", () => {
    const ref = { current: container };

    renderHook(() => useClickOutside(ref, true, onClickOutside));

    container.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(onClickOutside).not.toHaveBeenCalled();
  });
  test("should not call onClickOutside if isActive is false", () => {
    const ref = { current: container };

    renderHook(() => useClickOutside(ref, false, onClickOutside));

    document.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(onClickOutside).not.toHaveBeenCalled();
  });
});
