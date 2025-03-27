import { Suspense, lazy } from "react";

const SimpleBarChart = lazy(() =>
  import("components/Charts/BarCharts/SimpleBarChart")
);
const StackedBarChart = lazy(() =>
  import("components/Charts/BarCharts/StackedBarChart")
);
const BarChartStackedBySign = lazy(() =>
  import("components/Charts/BarCharts/BarChartStackedBySign")
);
const BiaxialBarChart = lazy(() =>
  import("components/Charts/BarCharts/BiaxialBarChart")
);

const SimpleLineChart = lazy(() =>
  import("components/Charts/LineCharts/SimpleLineChart")
);
const TinyLineChart = lazy(() =>
  import("components/Charts/LineCharts/TinyLineChart")
);
const DashedLineChart = lazy(() =>
  import("components/Charts/LineCharts/DashedLineChart")
);
const BiaxialLineChart = lazy(() =>
  import("components/Charts/LineCharts/BiaxialLineChart")
);

const SimplePieChart = lazy(() =>
  import("components/Charts/PieCharts/SimplePieChart")
);
const StraightAnglePieChart = lazy(() =>
  import("components/Charts/PieCharts/StraightAnglePieChart")
);
const TwoLevelPieChart = lazy(() =>
  import("components/Charts/PieCharts/TwoLevelPieChart")
);
const PieChartWithCustomizedLabel = lazy(() =>
  import("components/Charts/PieCharts/PieChartWithCustomizedLabel")
);

const SimpleScatterChart = lazy(() =>
  import("components/Charts/Scatter/SimpleScatterChart")
);
const MultipleYAxesScatterChart = lazy(() =>
  import("components/Charts/Scatter/MultipleYAxesScatterChart")
);

const Loading = () => <div>Loading...</div>;

export const barCharts = [
  {
    title: "Simple Bar Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <SimpleBarChart />
      </Suspense>
    ),
  },
  {
    title: "Stacked Bar Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <StackedBarChart />
      </Suspense>
    ),
  },

  {
    title: "Bar Chart Stacked By Sign",
    component: (
      <Suspense fallback={<Loading />}>
        <BarChartStackedBySign />
      </Suspense>
    ),
  },
  {
    title: "Biaxial Bar Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <BiaxialBarChart />
      </Suspense>
    ),
  },
];

export const lineCharts = [
  {
    title: "Tiny Line Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <TinyLineChart />
      </Suspense>
    ),
  },
  {
    title: "Simple Line Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <SimpleLineChart />
      </Suspense>
    ),
  },
  {
    title: "Dashed Line Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <DashedLineChart />
      </Suspense>
    ),
  },
  {
    title: "Biaxial Line Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <BiaxialLineChart />
      </Suspense>
    ),
  },
];

export const pieCharts = [
  {
    title: "Two Level Pie Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <TwoLevelPieChart />
      </Suspense>
    ),
  },
  {
    title: "Pie Chart With Customized Label",
    component: (
      <Suspense fallback={<Loading />}>
        <PieChartWithCustomizedLabel />
      </Suspense>
    ),
  },
  {
    title: "Simple Pie Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <SimplePieChart />
      </Suspense>
    ),
  },
  {
    title: "Straight Angle Pie Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <StraightAnglePieChart />
      </Suspense>
    ),
  },
];

export const scatterChart = [
  {
    title: "Simple Scatter Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <SimpleScatterChart />
      </Suspense>
    ),
  },
  {
    title: "Multi Axes Scatter Chart",
    component: (
      <Suspense fallback={<Loading />}>
        <MultipleYAxesScatterChart />
      </Suspense>
    ),
  },
];
