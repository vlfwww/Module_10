import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;

  &:has(input:disabled) .labelWrapper p {
    color: var(--input-disabled-color);
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .statusIndicator .stateIcon {
    width: 16px;
    height: 16px;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  & p {
    font: 500 0.875rem "Poppins";
    color: var(--text-main);
    margin: 0;
  }

  & img {
    width: 16px;
    height: 16px;

    [data-theme="dark"] & {
      filter: invert(1);
    }
  }
`;

export const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputField = styled.input<{ $isError?: boolean }>`
  background-color: var(--bg-page);
  color: ${({ $isError }) => ($isError ? "var(--input-error)" : "var(--text-secondary)")};
  border-radius: 8px;
  padding: 14px;
  font: 400 0.875rem "Poppins";
  border: 1px solid ${({ $isError }) => ($isError ? "var(--input-error)" : "var(--border-color)")};
  outline: none;
  width: 100%;
  transition: all 0.3s ease-out;

  &:focus {
    border-color: ${({ $isError }) => ($isError ? "var(--input-error)" : "var(--input-focus)")};
    color: ${({ $isError }) => ($isError ? "var(--input-error)" : "var(--text-main)")};
  }

  &:disabled {
    border: 1px solid var(--input-disabled-color);
    background-color: var(--bg-input-disabled);

    &::placeholder {
      color: var(--input-disabled-color);
      font: 400 0.875rem "Poppins";
    }
  }

  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }

  &::-webkit-contacts-auto-fill-button,
  &::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    display: none !important;
    pointer-events: none;
  }
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;

  & img {
    width: 16px;
    height: 16px;
  }
`;

export const ErrorWrapper = styled.div<{ $visible: boolean }>`
  display: grid;
  grid-template-rows: ${({ $visible }) => ($visible ? "1fr" : "0fr")};
  margin-top: ${({ $visible }) => ($visible ? "8px" : "0px")};
  transition:
    grid-template-rows 0.3s ease,
    margin-top 0.3s ease;
  overflow: hidden;
`;

export const ErrorContainer = styled.div`
  min-height: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ErrorTextWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font: 400 0.875rem "Poppins";
  min-width: 0;

  & img {
    width: 16px;
    height: 16px;
  }
`;

export const ErrorText = styled.span`
  color: var(--input-error);
`;

export const SuccessText = styled.span`
  color: var(--input-success);
`;

export const InfoIcon = styled.img`
  width: 16px;
  height: 16px;
`;
