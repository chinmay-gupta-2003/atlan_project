import SimpleBarChart from "components/Charts/BarCharts/SimpleBarChart";
import StackedBarChart from "components/Charts/BarCharts/StackedBarChart";
import PositiveAndNegativeBarChart from "components/Charts/BarCharts/PositiveAndNegativeBarChart";
import BarChartStackedBySign from "components/Charts/BarCharts/BarChartStackedBySign";
import BiaxialBarChart from "components/Charts/BarCharts/BiaxialBarChart";
import TinyBarChart from "components/Charts/BarCharts/TinyBarChart";

import SimpleLineChart from "components/Charts/LineCharts/SimpleLineChart";
import TinyLineChart from "components/Charts/LineCharts/TinyLineChart";
import DashedLineChart from "components/Charts/LineCharts/DashedLineChart";
import BiaxialLineChart from "components/Charts/LineCharts/BiaxialLineChart";

import SimplePieChart from "components/Charts/PieCharts/SimplePieChart";
import StraightAnglePieChart from "components/Charts/PieCharts/StraightAnglePieChart";
import TwoLevelPieChart from "components/Charts/PieCharts/TwoLevelPieChart";
import PieChartWithCustomizedLabel from "components/Charts/PieCharts/PieChartWithCustomizedLabel";

import SimpleScatterChart from "components/Charts/Scatter/SimpleScatterChart";
import MultipleYAxesScatterChart from "components/Charts/Scatter/MultipleYAxesScatterChart";

export const barCharts = [
  {
    title: "Tiny Bar Chart",
    component: <TinyBarChart />,
  },
  {
    title: "Simple Bar Chart",
    component: <SimpleBarChart />,
  },
  {
    title: "Stacked Bar Chart",
    component: <StackedBarChart />,
  },
  {
    title: "Positive Negative Bar Chart",
    component: <PositiveAndNegativeBarChart />,
  },
  {
    title: "Bar Chart Stacked By Sign",
    component: <BarChartStackedBySign />,
  },
  {
    title: "Biaxial Bar Chart",
    component: <BiaxialBarChart />,
  },
];

export const lineCharts = [
  {
    title: "Tiny Line Chart",
    component: <TinyLineChart />,
  },
  {
    title: "Simple Line Chart",
    component: <SimpleLineChart />,
  },
  {
    title: "Dashed Line Chart",
    component: <DashedLineChart />,
  },
  {
    title: "Biaxial Line Chart",
    component: <BiaxialLineChart />,
  },
];

export const pieCharts = [
  {
    title: "Simple Pie Chart",
    component: <SimplePieChart />,
  },
  {
    title: "Straight Angle Pie Chart",
    component: <StraightAnglePieChart />,
  },
  {
    title: "Two Level Pie Chart",
    component: <TwoLevelPieChart />,
  },
  {
    title: "Pie Chart With Customized Label",
    component: <PieChartWithCustomizedLabel />,
  },
];

export const scatterChart = [
  {
    title: "Simple Scatter Chart",
    component: <SimpleScatterChart />,
  },
  {
    title: "Multi Axes Scatter Chart",
    component: <MultipleYAxesScatterChart />,
  },
];
