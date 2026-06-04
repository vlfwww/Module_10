import styled from "styled-components";

export const CardWrapper = styled.div<{
  $viewType: "list" | "grid";
  $isMenuOpen: boolean;
  $backgroundImage: string | null;
}>`
  background-color: var(--bg-layout-edge);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  padding: 18px;
  position: relative;
  width: ${({ $viewType }) => ($viewType === "list" ? "100%" : "280px")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  z-index: ${({ $isMenuOpen }) => ($isMenuOpen ? 20 : 1)};
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  background-image: ${({ $backgroundImage }) =>
    $backgroundImage ? `url("${$backgroundImage}")` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${({ $viewType }) =>
    $viewType === "list" &&
    "min-height: 100px; display: flex; align-items: flex-start; gap: 40px; flex-direction:column;"}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    border-color: var(--input-focus);
    z-index: ${({ $isMenuOpen }) => ($isMenuOpen ? 20 : 2)};
  }
  height: 100%;
  @media (max-width: 1040px) {
    width: 100%;
  }
`;

export const NoteTitle = styled.p<{ $viewType: "list" | "grid" }>`
  color: var(--text-main);
  font:
    600 1.25rem "Inter",
    sans-serif;
  margin-bottom: ${({ $viewType }) => ($viewType === "list" ? "0" : "16px")};
  min-width: ${({ $viewType }) => ($viewType === "list" ? "200px" : "auto")};
`;

export const KebabAnchor = styled.div`
  position: absolute;
  bottom: 18px;
  right: 18px;
  z-index: 1;
`;

export const KebabButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;

  &:hover {
    background-color: var(--bg-menu-link-hover);
    border-radius: 4px;
  }

  & img {
    width: 20px;
    height: 20px;

    [data-theme="dark"] & {
      filter: invert(1);
    }
  }
`;
