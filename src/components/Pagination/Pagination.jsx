import React from "react";
import styles from "components/Pagination/Pagination.module.css";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

function Pagination({ setCurrentPage, totalPages, currentPage }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.container}>
      <ArrowLeftCircleIcon
        className={`${styles.icon} ${currentPage === 1 ? styles.disabled : ""}`}
        onClick={() => handlePageChange(currentPage - 1)}
        role="button"
        tabIndex={0}
        aria-disabled={currentPage === 1}
      />

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((value) => (
        <span
          key={value}
          onClick={() => handlePageChange(value)}
          className={value === currentPage ? styles.active : styles.pageIndex}
          role="button"
          tabIndex={0}
        >
          {value}
        </span>
      ))}

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
