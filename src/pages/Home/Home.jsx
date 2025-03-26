import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

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

  const fetchData = async () => {
    if (tableSelected.id) {
      try {
        const data = await getTableData(tableSelected.id);

        setTableData(data);
        setColumns(columnsMapping[tableSelected.id]);
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableSelected.id]);

  return (
    <div className={styles.container}>
      {tableSelected.id && <Table data={tableData} columns={columns} />}
      {!tableSelected.id && (
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
