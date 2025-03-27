import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { useSelector } from "react-redux";

import Table from "components/Table/Table";

import { getTableData } from "utils/getTableData";
import { columnsMapping } from "constants/mappings";

import styles from "pages/Home/Home.module.css";

function TableView({ refreshKey }) {
  const { tableSelected } = useSelector((state) => state.database);

  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (!tableSelected.id) return [];

    try {
      setIsLoading(true);

      const data = await getTableData(tableSelected.id);

      const filteredData = data.filter(() => Math.random() > 0.4);

      setTableData(filteredData);
      setColumns(columnsMapping[tableSelected.id]);
    } catch (error) {
      console.error("Error fetching table data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableSelected.id, refreshKey]);

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <PulseLoader color={"#17ddd6"} />
        </div>
      )}

      {tableSelected.id && !isLoading && (
        <Table data={tableData} columns={columns} />
      )}
    </>
  );
}

export default TableView;
