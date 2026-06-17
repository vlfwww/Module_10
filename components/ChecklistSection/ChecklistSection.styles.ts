import styled from "styled-components";

export const ScrollableItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const DeleteItemButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
  }

  & img {
    width: 24px;
    height: 24px;
  }
  [data-theme="dark"] & img {
    filter: invert(1);
  }
`;
