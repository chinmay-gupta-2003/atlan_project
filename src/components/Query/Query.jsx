import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import {
  BoltIcon,
  ClockIcon,
  DocumentArrowDownIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

import styles from "components/Query/Query.module.css";
import QueryHistoryModal from "components/Modals/QueryHistoryModal";
import GenerateQueryModal from "components/Modals/GenerateQueryModal";

import {
  addQueryToHistory,
  setDatabaseSelected,
  setQuerySelected,
  setTableSelected,
  setViewSelected,
} from "store/databaseSlice";
import { databases } from "constants/databases";
import { tables } from "constants/tables";
import { formatDate } from "utils/formatDate";
import { exportToCSV } from "utils/exportToCSV";

function Query({ onQueryExecute }) {
  const dispatch = useDispatch();
  const { tableSelected, databaseSelected, viewSelected } = useSelector(
    (state) => state.database
  );

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalGenerate, setOpenModalGenerate] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const handleFindClick = (queryText) => {
    if (!queryText) return toast.error("Please type a query");

    dispatch(
      addQueryToHistory({ time: formatDate(new Date()), query: queryText })
    );

    if (!databaseSelected.id) {
      const randomDatabase =
        databases[Math.floor(Math.random() * databases.length)];

      dispatch(setDatabaseSelected(randomDatabase));
    } else if (!tableSelected.id) {
      const availableTables = tables[databaseSelected.id];

      const randomTable =
        availableTables[Math.floor(Math.random() * availableTables.length)];

      dispatch(setTableSelected(randomTable));

      dispatch(setViewSelected("table"));
      dispatch(setQuerySelected("1"));
    } else onQueryExecute();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleFindClick(query);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.input} ${active ? styles.active : ""}`}>
        <ClockIcon
          height={18}
          className={styles.queryIcon}
          onClick={() => setOpenModal(true)}
        />
        <input
          type="text"
          placeholder="Type a query, or generate using AI"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
      </div>

      <button
        className={styles.btn}
        onClick={() => handleFindClick(query)}
        type="submit"
      >
        <span>Execute</span>
        <BoltIcon height={16} />
      </button>
      <button
        className={`${styles.btn} ${styles.exportBtn} ${
          !tableSelected.id || !viewSelected ? styles.disabled : ""
        }`}
        onClick={() => exportToCSV(setIsLoading)}
        type="submit"
        disabled={!tableSelected.id || !viewSelected}
      >
        {loading && <ClipLoader size={16} color="#fff" />}
        <span>Export Data</span>
        <DocumentArrowDownIcon height={16} />
      </button>
      <button
        className={`${styles.btn} ${styles.btnGradient}`}
        onClick={() => setOpenModalGenerate(true)}
      >
        <span>Generate</span>
        <SparklesIcon height={16} />
      </button>

      <QueryHistoryModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setQuery={setQuery}
      />

      <GenerateQueryModal
        onClick={handleFindClick}
        openModalGenerate={openModalGenerate}
        setOpenModalGenerate={setOpenModalGenerate}
        setFindQuery={setQuery}
      />
    </div>
  );
}

export default Query;
