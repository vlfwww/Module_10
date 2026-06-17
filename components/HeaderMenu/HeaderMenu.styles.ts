import styled from "styled-components";
import { animated } from "@react-spring/web";

export const HeaderMenuContainer = styled(animated.div)`
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
  top: 100%;
  right: 0;
  margin-top: 8px;
  min-width: 180px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  color: var(--text-main);
  transform-origin: top right;
`;

export const HeaderMenuItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  color: var(--text-main);
  text-decoration: none;
  border-radius: 8px;

  &:hover {
    background-color: var(--bg-menu-link-hover);
  }
`;
