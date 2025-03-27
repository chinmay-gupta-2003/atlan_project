import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

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

export default function SimpleBarChart() {
  const pData = generateRandomData(xLabels.length, 10000);
  const uData = generateRandomData(xLabels.length, 5000);

  return (
    <BarChart
      series={[
        { data: pData, label: "pv", id: "pvId" },
        { data: uData, label: "uv", id: "uvId" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
