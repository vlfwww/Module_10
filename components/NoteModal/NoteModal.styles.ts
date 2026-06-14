import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Overlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--modal-overlay);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(20px);
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    position: fixed;
    top: 48px;
    align-items: center;
    padding-top: 20px;
    height: calc(100vh - 48px);
  }
`;

export const ModalWindow = styled(animated.div)`
  background-color: var(--bg-modal);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  position: relative;
  color: var(--text-main);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    width: 95%;
    padding: 12px;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;
  flex-shrink: 0;
  gap: 16px;
  min-width: 0;

  & .modal-header-title {
    font: 400 2.25rem "Poppins";
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
    & .modal-header-title {
      font: 400 1rem "Poppins";
    }
  }
  @media (max-width: 365px) {
    & .modal-header-title {
      font: 400 0.8rem "Poppins";
    }
  }
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  [data-theme="dark"] & img {
    filter: invert(1);
  }
  & img {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    margin-right: 15px;
  }
`;

export const FormContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 4px;
  }
`;

export const ItemsSection = styled.div`
  margin-top: 8px;
`;

export const ItemsHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  & p {
    color: var(--text-main);
    font: 400 1rem "Poppins";
    margin: 0;
    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: var(--input-error);
  font: 500 1.063rem "Poppins";
  text-align: center;
  margin-top: 20px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 16px;
  flex-shrink: 0;
`;

export const BackgroundSection = styled.div`
  margin-top: 16px;
  padding: 16px;
  border: 1px dashed var(--border-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BackgroundHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    color: var(--text-main);
    font: 400 1rem "Poppins";
    margin: 0;
  }
`;

export const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border-color);
`;

export const BackgroundPreview = styled.div<{ $src: string }>`
  width: 100%;
  height: 100%;
  background-image: url("${({ $src }) => $src}");
  background-size: cover;
  background-position: center;
`;

export const RemoveBgButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  color: #fff;
  font: 400 0.75rem "Poppins";
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 0, 0, 0.8);
  }
`;

export const NotesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  min-height: 0;
  max-height: 550px;
  overflow-y: scroll;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 4px;
  }
`;

export const NoteText = styled.p`
  font: 400 1rem "Inter";
  color: var(--text-main);
  word-break: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  margin-bottom: 10px;
`;

export const CheckboxRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

  input {
    display: none;
  }

  label {
    font: 400 1rem "Inter";
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    color: var(--text-main);
    flex: 1;
    min-width: 0;
    word-break: break-word;
    white-space: pre-wrap;
  }

  label::before {
    content: "";
    display: inline-block;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent-color);
    border-radius: 4px;
    background-color: var(--bg-content);
    transition: all 0.2s;
  }

  input:checked + label::before {
    background-color: var(--accent-color);
    content: "✓";
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }

  label:active::before {
    outline: 4px solid rgba(211, 244, 224, 1);
  }
`;
