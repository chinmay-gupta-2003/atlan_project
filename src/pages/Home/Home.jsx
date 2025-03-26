import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

import Table from "components/Table/Table";
import { getTableData } from "utils/getTableData";
import { columnsMapping } from "constants/mappings";
import home from "assets/svg/home.svg";

import styles from "pages/Home/Home.module.css";

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

  return (
    <div className={styles.container}>
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
