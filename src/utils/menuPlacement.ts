import { FALLBACK_PRIORITY, MenuPlacement, MenuSize, ViewportSize } from "../types/common";

const VIEWPORT_PADDING = 8;

function getPredictedRect(
  placement: MenuPlacement,
  anchorRect: DOMRect,
  menu: MenuSize,
): { top: number; left: number; bottom: number; right: number } {
  switch (placement) {
    case "bottom-right":
      return {
        top: anchorRect.bottom,
        left: anchorRect.right,
        bottom: anchorRect.bottom + menu.height,
        right: anchorRect.right + menu.width,
      };
    case "bottom-left":
      return {
        top: anchorRect.bottom,
        left: anchorRect.left - menu.width,
        bottom: anchorRect.bottom + menu.height,
        right: anchorRect.left,
      };
    case "top-right":
      return {
        top: anchorRect.top - menu.height,
        left: anchorRect.right,
        bottom: anchorRect.top,
        right: anchorRect.right + menu.width,
      };
    case "top-left":
      return {
        top: anchorRect.top - menu.height,
        left: anchorRect.left - menu.width,
        bottom: anchorRect.top,
        right: anchorRect.left,
      };
  }
}

function fitsViewport(
  rect: { top: number; left: number; bottom: number; right: number },
  viewport: ViewportSize,
  padding: number,
): boolean {
  return (
    rect.top >= padding &&
    rect.left >= padding &&
    rect.bottom <= viewport.height - padding &&
    rect.right <= viewport.width - padding
  );
}

export function computeMenuPlacement(
  anchorRect: DOMRect,
  menuSize: MenuSize,
  viewport: ViewportSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  padding = VIEWPORT_PADDING,
): MenuPlacement {
  const defaultPlacement: MenuPlacement = "bottom-right";
  const defaultRect = getPredictedRect(defaultPlacement, anchorRect, menuSize);

  if (fitsViewport(defaultRect, viewport, padding)) {
    return defaultPlacement;
  }

  for (const placement of FALLBACK_PRIORITY) {
    const predicted = getPredictedRect(placement, anchorRect, menuSize);
    if (fitsViewport(predicted, viewport, padding)) {
      return placement;
    }
  }

  return "top-left";
}
