import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";

import styles from "pages/Home/Home.module.css";
import TableView from "pages/Home/TableView";

import Query from "components/Query/Query";
import ViewSelector from "components/ViewSelector/ViewSelector";
import PredefinedQueries from "components/ViewSelector/PredefinedQueries";

import {
  barCharts,
  lineCharts,
  pieCharts,
  scatterChart,
} from "constants/charts";

import home from "assets/svg/home.svg";

function Home() {
  const { tableSelected, viewSelected } = useSelector(
    (state) => state.database
  );

  const [refreshKey, setRefreshKey] = useState(0);
  const [refreshKeyTable, setRefreshKeyTable] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (viewSelected) {
      setIsLoading(true);

      const timeout = setTimeout(() => setIsLoading(false), 500);

      return () => clearTimeout(timeout);
    }
  }, [viewSelected]);

  const handleQueryExecute = () => {
    setRefreshKey((prev) => prev + 1);

    if (viewSelected === "table") setRefreshKeyTable((prev) => prev + 1);
  };

  const getCharts = () => {
    const chartsMap = {
      barChart: barCharts,
      lineChart: lineCharts,
      pieChart: pieCharts,
      scatterPlot: scatterChart,
    };

    return chartsMap[viewSelected] || [];
  };

  return (
    <div className={styles.container}>
      <Query onQueryExecute={handleQueryExecute} />
      {tableSelected.id && <ViewSelector key={1} />}
      {tableSelected.id && (
        <PredefinedQueries key={2} onQueryExecute={handleQueryExecute} />
      )}

      <div className={styles.charts}>
        {isLoading && (
          <div className={styles.loader}>
            <PulseLoader color={"#17ddd6"} />
          </div>
        )}

        {!isLoading && viewSelected === "table" && (
          <TableView refreshKey={refreshKeyTable} />
        )}

        {!isLoading &&
          getCharts().map((container) => (
            <div className="chartWrapper" key={container.title + refreshKey}>
              <span>{container.title}</span>
              {container.component}
            </div>
          ))}

        {!tableSelected.id && !isLoading && (
          <div className={styles.subContainer}>
            <img src={home} alt="image" className={styles.image} />
            <span>
              Select database and table to use predefined queries and get
              valuable insights.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
