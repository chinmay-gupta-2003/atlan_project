import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const generateRandomData = (labels, range) =>
  labels.map((label) => ({
    label,
    value: Math.floor(Math.random() * range) + 50,
  }));

export default function TwoLevelPieChart() {
  const data1 = generateRandomData(["Group A", "Group B"], 500);
  const data2 = generateRandomData(
    ["A1", "A2", "B1", "B2", "B3", "B4", "B5"],
    200
  );

  return (
    <PieChart
      series={[
        {
          innerRadius: 0,
          outerRadius: 80,
          data: data1,
        },
        {
          innerRadius: 100,
          outerRadius: 120,
          data: data2,
        },
      ]}
    />
  );
}
