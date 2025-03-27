import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const generateRandomData = () =>
  ["Group A", "Group B", "Group C", "Group D"].map((label) => ({
    label,
    value: Math.floor(Math.random() * 500) + 100,
  }));

const sizing = { margin: { right: 5 } };

export default function PieChartWithCustomizedLabel() {
  const data = generateRandomData();
  const TOTAL = data.reduce((sum, item) => sum + item.value, 0);

  const getArcLabel = (params) => {
    const percent = (params.value / TOTAL) * 100;
    return `${percent.toFixed(0)}%`;
  };

  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 14,
        },
      }}
      {...sizing}
    />
  );
}
