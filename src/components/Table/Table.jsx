import { useState } from "react";

import styles from "components/Table/Table.module.css";
import Pagination from "components/Pagination/Pagination";
import { setPaginationData, totalPages } from "utils/pagination";
import { sortData } from "utils/sortData";

function Table({ data = [], columns = [] }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(500);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handlePageLimitChange = (event) => {
    setPageLimit(Number(event.target.value));
    setPageNumber(1);
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
            {setPaginationData(sortedData, pageNumber, pageLimit).map(
              (row, i) => (
                <tr key={i}>
                  {columns.map((col, j) => (
                    <td key={j}>{row[col.accessorKey]}</td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.paginateContainer}>
        <select
          value={pageLimit}
          onChange={handlePageLimitChange}
          className={styles.select}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
          <option value={2000}>2000</option>
        </select>
        <Pagination
          totalPages={totalPages(data, pageLimit)}
          currentPage={pageNumber}
          setCurrentPage={setPageNumber}
          pageLimit={pageLimit}
          siblingsCount={1}
        />
      </div>
    </div>
  );
}

export default Table;
