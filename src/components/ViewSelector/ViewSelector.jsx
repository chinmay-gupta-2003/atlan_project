import { useDispatch, useSelector } from "react-redux";
import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  ChartPieIcon,
  EllipsisHorizontalIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";

import Chip from "components/Chip/Chip";
import styles from "components/ViewSelector/ViewSelector.module.css";
import { setViewSelected } from "store/databaseSlice";

function ViewSelector() {
  const dispatch = useDispatch();
  const { viewSelected } = useSelector((state) => state.database);

  const handleViewChange = (view) => {
    dispatch(setViewSelected(view));
  };

  const viewOptions = [
    { key: "table", label: "Table", icon: <TableCellsIcon height={16} /> },
    { key: "barChart", label: "Bar Chart", icon: <ChartBarIcon height={16} /> },
    {
      key: "lineChart",
      label: "Line Chart",
      icon: <ArrowTrendingUpIcon height={16} />,
    },
    { key: "pieChart", label: "Pie Chart", icon: <ChartPieIcon height={16} /> },
    {
      key: "scatterPlot",
      label: "Scatter Plot",
      icon: <EllipsisHorizontalIcon height={16} />,
    },
  ];

  return (
    <div className={styles.container}>
      {viewOptions.map(({ key, label, icon }) => (
        <Chip
          key={key}
          text={label}
          isActive={viewSelected === key}
          onClick={() => handleViewChange(key)}
          icon={icon}
        />
      ))}
    </div>
  );
}

export default ViewSelector;
