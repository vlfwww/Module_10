import { MenuPlacement } from "@/types/common";
import { computeMenuPlacement } from "@/utils/menuPlacement/menuPlacement";
import { useLayoutEffect, useState } from "react";

export function useKebabMenuPlacement(
  isOpen: boolean,
  anchorRef: React.RefObject<HTMLElement | null>,
  menuRef: React.RefObject<HTMLElement | null>,
): MenuPlacement {
  const [placement, setPlacement] = useState<MenuPlacement>("bottom-right");

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    const updatePlacement = () => {
      const anchor = anchorRef.current;
      const menu = menuRef.current;
      if (!anchor || !menu) return;

      const anchorRect = anchor.getBoundingClientRect();
      const menuRect = menu.getBoundingClientRect();

      setPlacement(
        computeMenuPlacement(anchorRect, {
          width: menuRect.width,
          height: menuRect.height,
        }),
      );
    };

    updatePlacement();
    window.addEventListener("resize", updatePlacement);
    return () => window.removeEventListener("resize", updatePlacement);
  }, [isOpen, anchorRef, menuRef]);

  return placement;
}
