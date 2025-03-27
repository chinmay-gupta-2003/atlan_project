import * as React from "react";
import { ScatterChart } from "@mui/x-charts/ScatterChart";

const data = [
  { x: 10, y: 200, id: 1 },
  { x: 12, y: 100, id: 2 },
  { x: 170, y: 300, id: 3 },
  { x: 140, y: 250, id: 4 },
  { x: 150, y: 400, id: 5 },
  { x: 110, y: 280, id: 6 },
  { x: 20, y: 150, id: 7 },
  { x: 180, y: 350, id: 8 },
  { x: 130, y: 220, id: 9 },
  { x: 160, y: 270, id: 10 },
  { x: 90, y: 320, id: 11 },
  { x: 210, y: 180, id: 12 },
  { x: 175, y: 290, id: 13 },
  { x: 12, y: 240, id: 14 },
  { x: 155, y: 310, id: 15 },
  { x: 195, y: 370, id: 16 },
  { x: 220, y: 200, id: 17 },
  { x: 185, y: 330, id: 18 },
  { x: 45, y: 260, id: 19 },
  { x: 65, y: 280, id: 20 },
];

export default function SimpleScatterChart() {
  return (
    <ScatterChart
      series={[{ data, label: "pv", id: "pvId" }]}
      xAxis={[{ min: 0 }]}
    />
  );
}
