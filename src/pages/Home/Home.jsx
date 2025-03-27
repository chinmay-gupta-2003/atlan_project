import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

import Table from "components/Table/Table";
import { getTableData } from "utils/getTableData";
import { columnsMapping } from "constants/mappings";
import home from "assets/svg/home.svg";

import styles from "pages/Home/Home.module.css";
import SimpleBarChart from "components/Charts/BarCharts/SimpleBarChart";
import StackedBarChart from "components/Charts/BarCharts/StackedBarChart";
import PositiveAndNegativeBarChart from "components/Charts/BarCharts/PositiveAndNegativeBarChart";
import BarChartStackedBySign from "components/Charts/BarCharts/BarChartStackedBySign";
import BiaxialBarChart from "components/Charts/BarCharts/BiaxialBarChart";
import SimpleLineChart from "components/Charts/LineCharts/SimpleLineChart";

function Home() {
  const { tableSelected, databaseSelected } = useSelector(
    (state) => state.database
  );

  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (tableSelected.id) {
      try {
        setIsLoading(true);

        const data = await getTableData(tableSelected.id);

        setTableData(data);
        setColumns(columnsMapping[tableSelected.id]);
      } catch (error) {
        console.error("Error fetching table data:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableSelected.id]);

  const barCharts = [
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

  const lineCharts = [
    {
      title: "Simple Line Chart",
      component: <SimpleLineChart />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.charts}>
        {barCharts.map((container) => (
          <div className="chartWrapper">
            <span>{container.title}</span>
            {container.component}
          </div>
        ))}
        {lineCharts.map((container) => (
          <div className="chartWrapper">
            <span>{container.title}</span>
            {container.component}
          </div>
        ))}
      </div>
      {isLoading && (
        <div className={styles.loader}>
          <PulseLoader color={"#17ddd6"} />
        </div>
      )}
      {tableSelected.id && !isLoading && (
        <Table data={tableData} columns={columns} />
      )}
      {!tableSelected.id && !isLoading && (
        <div className={styles.subContainer}>
          <img src={home} alt="image" className={styles.image} />
          <span>
            Please select a database and table to check predefined queries.
          </span>
        </div>
      )}
    </div>
  );
}

export default Home;
