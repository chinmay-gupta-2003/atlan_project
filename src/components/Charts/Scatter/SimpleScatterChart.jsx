import * as React from "react";
import { ScatterChart } from "@mui/x-charts/ScatterChart";

const generateRandomData = (count, xRange, yRange) =>
  Array.from({ length: count }, (_, id) => ({
    x: Math.floor(Math.random() * xRange),
    y: Math.floor(Math.random() * yRange),
    id: id + 1,
  }));

export default function SimpleScatterChart() {
  const data = generateRandomData(20, 250, 400);

  return (
    <ScatterChart
      series={[{ data, label: "pv", id: "pvId" }]}
      xAxis={[{ min: 0 }]}
    />
  );
}
