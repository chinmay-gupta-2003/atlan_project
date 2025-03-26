import { useState } from "react";

import styles from "components/Table/Table.module.css";
import Pagination from "components/Pagination/Pagination";
import { setPaginationData, totalPages } from "utils/pagination";

function Table({ data = [], columns = [] }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(100);

  const paginateTableData = (data) => {
    return setPaginationData(data, pageNumber, pageLimit);
  };

  const handlePageLimitChange = (event) => {
    setPageLimit(Number(event.target.value));
    setPageNumber(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableCont}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((head, i) => {
                return (
                  <th key={i}>
                    <span>{head.header}</span>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {paginateTableData(data).map((row, i) => (
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
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
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
