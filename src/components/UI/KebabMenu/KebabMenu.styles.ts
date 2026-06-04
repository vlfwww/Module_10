import styled, { css } from "styled-components";
import { animated } from "@react-spring/web";
import { MenuPlacement } from "../../../types/common";

const placementStyles: Record<MenuPlacement, ReturnType<typeof css>> = {
  "bottom-right": css`
    top: 100%;
    left: 100%;
    right: auto;
    bottom: auto;
  `,
  "bottom-left": css`
    top: 100%;
    right: 100%;
    left: auto;
    bottom: auto;
  `,
  "top-right": css`
    bottom: 100%;
    left: 100%;
    top: auto;
    right: auto;
  `,
  "top-left": css`
    bottom: 100%;
    right: 100%;
    top: auto;
    left: auto;
  `,
};

const transformOrigin: Record<MenuPlacement, string> = {
  "bottom-right": "top left",
  "bottom-left": "top right",
  "top-right": "bottom left",
  "top-left": "bottom right",
};

export const KebabMenuContainer = styled(animated.div)<{ $placement: MenuPlacement }>`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-content);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
  font:
    400 1.125rem "Poppins",
    sans-serif;
  position: absolute;
  min-width: 180px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  color: var(--text-main);
  transform-origin: ${({ $placement }) => transformOrigin[$placement as MenuPlacement]};

  ${({ $placement }) => placementStyles[$placement as MenuPlacement]}
`;

export const KebabMenuItem = styled.div`
  padding: 8px 16px;
  margin: 0;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-menu-link-hover);
    border-radius: 8px;
  }
`;
