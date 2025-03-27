import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const generateRandomData = () =>
  ["Group A", "Group B", "Group C", "Group D"].map((label) => ({
    label,
    value: Math.floor(Math.random() * 500) + 100,
  }));

export default function SimplePieChart() {
  const data = generateRandomData();

  return (
    <PieChart
      series={[
        {
          paddingAngle: 5,
          innerRadius: 60,
          outerRadius: 80,
          data,
        },
      ]}
      margin={{ right: 5 }}
    />
  );
}
