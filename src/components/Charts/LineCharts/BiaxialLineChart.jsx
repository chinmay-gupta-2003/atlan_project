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

export default function BiaxialLineChart() {
  const pData = generateRandomData(xLabels.length, 10000);
  const uData = generateRandomData(xLabels.length, 5000);

  return (
    <LineChart
      series={[
        { data: pData, label: "pv", yAxisId: "leftAxisId" },
        { data: uData, label: "uv", yAxisId: "rightAxisId" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
      rightAxis="rightAxisId"
    />
  );
}
