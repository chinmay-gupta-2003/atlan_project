import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const generateRandomData = (length, range) =>
  Array.from({ length }, () => Math.floor(Math.random() * (range * 2) - range));

const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function TinyLineChart() {
  const uData = generateRandomData(xLabels.length, 5000);

  return (
    <LineChart
      series={[{ data: uData, label: "uv" }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
