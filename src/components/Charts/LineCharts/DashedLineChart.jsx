import * as React from "react";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

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

export default function DashedLineChart() {
  const pData = generateRandomData(xLabels.length, 10000);
  const uData = generateRandomData(xLabels.length, 5000);

  return (
    <LineChart
      series={[
        { data: pData, label: "pv", id: "pvId" },
        { data: uData, label: "uv", id: "uvId" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
          strokeWidth: 1,
        },
        ".MuiLineElement-series-pvId": {
          strokeDasharray: "5 5",
        },
        ".MuiLineElement-series-uvId": {
          strokeDasharray: "3 4 5 2",
        },
        [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]:
          {
            fill: "#fff",
          },
        [`& .${markElementClasses.highlighted}`]: {
          stroke: "none",
        },
      }}
    />
  );
}
