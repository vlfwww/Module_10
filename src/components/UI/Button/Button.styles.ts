import styled from "styled-components";

export const CustomButton = styled.button<{ $fullWidth?: boolean }>`
  background-color: var(--accent-color);
  border: none;
  border-radius: 8px;
  text-align: center;
  padding: 14px 48px;
  font: 400 0.875rem "Poppins";
  color: var(--text-modal-button);
  cursor: pointer;
  transition: background-color 0.2s;
  box-sizing: border-box;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 14px 24px;
  }

  &:hover {
    background-color: var(--btn-hover);
  }

  &:active {
    background-color: var(--btn-active);
  }

  &:disabled {
    background-color: var(--btn-disabled);
    cursor: not-allowed;
  }
`;
