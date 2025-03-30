import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { useSelector } from "react-redux";

import Table from "components/Table/Table";

import { getTableData } from "utils/getTableData";
import { columnsMapping } from "constants/mappings";

import styles from "pages/Home/Home.module.css";

function TableView({ refreshKey, setRefreshKey }) {
  const { tableSelected } = useSelector((state) => state.database);

  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(25);

  const [isLoading, setIsLoading] = useState(false);

  const numberOfRecords = tableSelected.id === 404 ? 10000000 : 5000;

  const fetchData = async () => {
    if (!tableSelected.id) return [];

    try {
      setIsLoading(true);

      const data = await getTableData(tableSelected.id);

      setTableData(data);
      setColumns(columnsMapping[tableSelected.id]);
    } catch (error) {
      console.error("Error fetching table data:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
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
        <Table
          data={tableData}
          columns={columns}
          numberOfRecords={numberOfRecords}
          pageNumber={pageNumber}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
          setPageNumber={setPageNumber}
          setRefreshKey={setRefreshKey}
        />
      )}
    </>
  );
}

export default TableView;
