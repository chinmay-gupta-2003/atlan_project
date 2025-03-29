import React from "react";
import styles from "components/Pagination/Pagination.module.css";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

function Pagination({
  setCurrentPage,
  totalPages,
  currentPage,
  pageLimit,
  setRefreshKey,
}) {
  const handlePageChange = (page) => {
    if (page >= 1 && page * pageLimit <= totalPages) {
      setCurrentPage(page);
      setRefreshKey((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.active}>
        {(currentPage - 1) * pageLimit + 1} - {currentPage * pageLimit}
        <span className={styles.pageIndex}> of {totalPages}</span>
      </span>
      <ArrowLeftCircleIcon
        className={`${styles.icon} ${currentPage === 1 ? styles.disabled : ""}`}
        onClick={() => handlePageChange(currentPage - 1)}
        role="button"
        tabIndex={0}
        aria-disabled={currentPage === 1}
      />
      <ArrowRightCircleIcon
        className={`${styles.icon} ${
          currentPage === totalPages ? styles.disabled : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        role="button"
        tabIndex={0}
        aria-disabled={currentPage === totalPages}
      />
    </div>
  );
}

export default Pagination;
