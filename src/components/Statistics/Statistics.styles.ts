import styled from "styled-components";

export const KPIRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Title = styled.p`
  color: var(--text-main);
  font: 600 1.75rem "Inter";
  margin-bottom: 24px;
`;

export const StatisticCard = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-layout-edge);
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StatisticCardTitle = styled.h3`
  color: var(--text-secondary);
  font: 500 0.875rem "Inter";
  margin: 0 0 8px 0;
`;

export const StatisticCardMainValue = styled.p`
  color: var(--text-main);
  font: 700 2rem "Inter";
  margin: 0;
`;

export const StatisticCardPastInfo = styled.p`
  color: var(--text-secondary);
  font: 400 0.875rem "Inter";
  margin-top: 4px;
`;

export const ChartAndTableWrapper = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1220px) {
    flex-direction: column;
  }
`;

export const StatsTable = styled.table`
  background: var(--bg-layout-edge);
  padding: 24px;
  border-radius: 12px;
  width: 50%;
  border-collapse: collapse;

  @media (max-width: 1220px) {
    width: 100%;
  }

  th {
    text-align: left;
    padding: 16px 12px;
    color: var(--text-secondary);
    font: 500 1rem "Inter";
    border-bottom: 1px solid var(--border-color);
  }

  tbody tr:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
  }

  td {
    padding: 16px 12px;
    color: var(--text-main);
    font: 400 1rem "Inter";
  }
`;

export const StatsGraph = styled.div`
  background: var(--bg-layout-edge);
  height: 300px;
  width: 50%;
  padding: 24px;
  border-radius: 12px;

  @media (max-width: 1220px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    height: 200px;
    padding: 16px;
  }
`;
