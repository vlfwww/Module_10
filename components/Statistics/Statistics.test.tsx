import { screen } from "@testing-library/react";
import StatisticsSection from "./Statistics";
import { renderWithProviders } from "@/utils/testUtils/test-utils";
import { useStatistics } from "@/hooks/useStatistics/useStatistics";

jest.mock("recharts", () => {
  const Original = jest.requireActual("recharts");
  const React = require("react");
  return {
    ...Original,
    ResponsiveContainer: () => React.createElement("div", { "data-testid": "stats-chart" }),
  };
});

jest.mock("@/hooks/useStatistics/useStatistics");

describe("StatisticsSection Component", () => {
  const mockStats = {
    cardInfo: [
      { title: "Total Tasks", value: "50", past: "+5" },
      { title: "Completed", value: "40", past: "+2" },
    ],
    chartData: [
      { date: "Jan", created: 5, archived: 2, deleted: 1 },
      { date: "Feb", created: 8, archived: 3, deleted: 0 },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useStatistics as jest.Mock).mockReturnValue(mockStats);
  });

  test("returns null when no data is provided", () => {
    (useStatistics as jest.Mock).mockReturnValue(null);
    const { container } = renderWithProviders(<StatisticsSection />);
    expect(container.firstChild).toBeNull();
  });

  test("renders KPI cards correctly", () => {
    renderWithProviders(<StatisticsSection />);

    expect(screen.getByText("Total Tasks")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("40")).toBeInTheDocument();
  });

  test("renders correct number of table rows", () => {
    renderWithProviders(<StatisticsSection />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(3);

    expect(screen.getByText("Jan")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("Feb")).toBeInTheDocument();
  });
});
