import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Group A", value: 400 },
  { label: "Group B", value: 300 },
  { label: "Group C", value: 300 },
  { label: "Group D", value: 200 },
];

export default function StraightAnglePieChart() {
  return (
    <PieChart
      series={[
        {
          startAngle: -90,
          endAngle: 90,
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
