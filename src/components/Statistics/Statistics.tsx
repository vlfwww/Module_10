import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import * as S from "./Statistics.styles";
import { useStatistics } from "../../hooks/useStatistics/useStatistics";
import { useTranslation } from "react-i18next";

const StatisticsSection: React.FC = () => {
  const data = useStatistics();
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) return null;

  return (
    <div>
      <S.Title>{t("stats.title")}</S.Title>
      <S.KPIRow>
        {data.cardInfo.map((card, index) => (
          <S.StatisticCard key={index}>
            <S.StatisticCardTitle>{card.title}</S.StatisticCardTitle>
            <S.StatisticCardMainValue>{card.value}</S.StatisticCardMainValue>
            <S.StatisticCardPastInfo>{card.past}</S.StatisticCardPastInfo>
          </S.StatisticCard>
        ))}
      </S.KPIRow>

      <S.ChartAndTableWrapper>
        <S.StatsTable>
          <thead>
            <tr>
              <th>Month</th>
              <th>Created</th>
              <th>Archived</th>
              <th>Deleted</th>
            </tr>
          </thead>
          <tbody>
            {data.chartData.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.created}</td>
                <td>{row.archived}</td>
                <td>{row.deleted}</td>
              </tr>
            ))}
          </tbody>
        </S.StatsTable>

        <S.StatsGraph>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                interval={isMobile ? 1 : 0}
                tick={{ fontSize: isMobile ? 10 : 12, fill: "var(--text-secondary)" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                width={10}
                tick={{ fontSize: isMobile ? 10 : 12, fill: "var(--text-secondary)" }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="created"
                stroke="var(--stat-color)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="archived"
                stroke="rgba(255, 85, 74, 1)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="deleted"
                stroke="rgba(122, 68, 255, 1)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </S.StatsGraph>
      </S.ChartAndTableWrapper>
    </div>
  );
};

export default React.memo(StatisticsSection);
