import { useMemo } from "react";
import { useTodos } from "./useTodos";

interface ChartDataPoint {
  date: string;
  created: number;
  archived: number;
  deleted: number;
  sortKey: number;
}

export const useStatistics = () => {
  const { data: notesData } = useTodos("NOTES");
  const { data: archivedData } = useTodos("ARCHIVED");
  const { data: trashData } = useTodos("TRASH");

  return useMemo(() => {
    const todos = [
      ...(notesData?.todos || []),
      ...(archivedData?.todos || []),
      ...(trashData?.todos || []),
    ];

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const count = (status: "NOTES" | "ARCHIVED" | "TRASH" | "ALL", month: number, year: number) =>
      todos.filter((t) => {
        if (!t.createdAt) return false;
        const d = new Date(t.createdAt);
        const matchStatus = status === "ALL" ? true : t.status === status;
        return matchStatus && d.getMonth() === month && d.getFullYear() === year;
      }).length;

    const calcPercent = (curr: number, prev: number) =>
      prev === 0 ? (curr > 0 ? 100 : 0) : Math.round(((curr - prev) / prev) * 100);

    const created = {
      curr: count("ALL", currentMonth, currentYear),
      prev: count("ALL", prevMonth, prevMonthYear),
    };
    const archived = {
      curr: count("ARCHIVED", currentMonth, currentYear),
      prev: count("ARCHIVED", prevMonth, prevMonthYear),
    };
    const deleted = {
      curr: count("TRASH", currentMonth, currentYear),
      prev: count("TRASH", prevMonth, prevMonthYear),
    };

    const chartDataMap = todos.reduce((acc: Record<string, ChartDataPoint>, todo) => {
      if (!todo.createdAt) return acc;

      const date = new Date(todo.createdAt);
      const monthYear = date.toLocaleString("default", { month: "short", year: "numeric" });

      if (!acc[monthYear]) {
        acc[monthYear] = {
          date: monthYear,
          created: 0,
          archived: 0,
          deleted: 0,
          sortKey: date.getTime(),
        };
      }

      acc[monthYear].created += 1;
      if (todo.status === "ARCHIVED") acc[monthYear].archived += 1;
      if (todo.status === "TRASH") acc[monthYear].deleted += 1;

      return acc;
    }, {});

    const finalChartData = Object.values(chartDataMap).sort((a, b) => a.sortKey - b.sortKey);

    return {
      cardInfo: [
        {
          title: "Created",
          value: created.curr,
          past: `${calcPercent(created.curr, created.prev)}% month over month`,
        },
        {
          title: "Archived",
          value: archived.curr,
          past: `${calcPercent(archived.curr, archived.prev)}% month over month`,
        },
        {
          title: "Deleted",
          value: deleted.curr,
          past: `${calcPercent(deleted.curr, deleted.prev)}% month over month`,
        },
      ],
      chartData: finalChartData,
    };
  }, [notesData, archivedData, trashData]);
};
