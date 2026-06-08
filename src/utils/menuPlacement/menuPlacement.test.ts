import { computeMenuPlacement } from "./menuPlacement";

describe("computeMenuPlacement", () => {
  const menuSize: { width: number; height: number } = { width: 100, height: 200 };
  const viewport = { width: 1000, height: 1000 };

  test("returns bottom-right if the menu fits", () => {
    const anchorRect = { top: 100, left: 100, bottom: 200, right: 200 } as DOMRect;
    const result = computeMenuPlacement(anchorRect, menuSize, viewport);

    expect(result).toBe("bottom-right");
  });

  test("switches to an alternative if the bottom-right goes out of bounds", () => {
    const anchorRect = { top: 950, left: 950, bottom: 960, right: 960 } as DOMRect;
    const result = computeMenuPlacement(anchorRect, menuSize, viewport);

    expect(result).not.toBe("bottom-right");
  });
});
