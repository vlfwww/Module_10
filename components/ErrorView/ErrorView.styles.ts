import styled from "styled-components";

export const ErrorContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  padding: 40px;
  min-height: 60vh;

  .crossIcon {
    width: 95px;
    height: 95px;
    color: var(--text-main);
  }

  h1 {
    font:
      600 3.75rem "Inter",
      sans-serif;
    color: var(--text-main);
    margin: 0;
  }

  p {
    font:
      600 3.75rem "Inter",
      sans-serif;
    color: var(--text-main);
    margin: 0;
  }
`;
