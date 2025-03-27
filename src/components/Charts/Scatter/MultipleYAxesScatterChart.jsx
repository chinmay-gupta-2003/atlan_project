import * as React from "react";
import { ScatterChart } from "@mui/x-charts/ScatterChart";

const generateRandomData = (count, xRange, yRange) =>
  Array.from({ length: count }, (_, id) => ({
    x: Math.floor(Math.random() * xRange),
    y: Math.floor(Math.random() * yRange),
    id: id + 1,
  }));

export default function MultipleYAxesScatterChart() {
  const data1 = generateRandomData(6, 200, 500);
  const data2 = generateRandomData(12, 600, 800);

  return (
    <ScatterChart
      series={[
        {
          data: data1,
          yAxisId: "leftAxis",
          valueFormatter: ({ x, y }) => `${x}cm, ${y}kg`,
        },
        {
          data: data2,
          yAxisId: "rightAxis",
          valueFormatter: ({ x, y }) => `${x}cm, ${y}kg`,
        },
      ]}
      xAxis={[{ min: 0 }]}
      yAxis={[
        { id: "leftAxis", min: 0 },
        { id: "rightAxis", min: 0 },
      ]}
      rightAxis="rightAxis"
    />
  );
}
