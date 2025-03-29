import { useState } from "react";

import styles from "components/Table/Table.module.css";
import Pagination from "components/Pagination/Pagination";
import { sortData } from "utils/sortData";

function Table({
  data = [],
  columns = [],
  numberOfRecords = 0,
  pageLimit,
  setPageLimit,
  pageNumber,
  setPageNumber,
  setRefreshKey,
}) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handlePageLimitChange = (event) => {
    setPageLimit(Number(event.target.value));
    setPageNumber(1);
    setRefreshKey((prev) => prev + 1);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }

      return { key, direction: "asc" };
    });
  };

  const sortedData = sortData(data, sortConfig);

  const startIndex = (pageNumber - 1) * pageLimit;
  let paginatedData = sortedData.slice(startIndex, startIndex + pageLimit);
  if (paginatedData.length === 0) paginatedData = sortedData;

  return (
    <div className={styles.container}>
      <div className={styles.tableCont}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>
                  <p
                    className={styles.sortable}
                    onClick={() => handleSort(col.accessorKey)}
                  >
                    <span>{col.header}</span>
                    {sortConfig.key === col.accessorKey
                      ? sortConfig.direction === "asc"
                        ? "▲"
                        : "▼"
                      : ""}
                  </p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((row, i) => (
              <tr key={i}>
                {columns.map((col, j) => (
                  <td key={j}>{row[col.accessorKey]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.paginateContainer}>
        <select
          value={pageLimit}
          onChange={handlePageLimitChange}
          className={styles.select}
        >
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
          <option value={5000}>5000</option>
        </select>
        <Pagination
          totalPages={numberOfRecords}
          currentPage={pageNumber}
          setCurrentPage={setPageNumber}
          pageLimit={pageLimit}
          setRefreshKey={setRefreshKey}
        />
      </div>
    </div>
  );
}

export default Table;
