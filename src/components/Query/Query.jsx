import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BoltIcon, ClockIcon, SparklesIcon } from "@heroicons/react/24/solid";

import styles from "components/Query/Query.module.css";

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
import QueryHistoryModal from "components/Modals/QueryHistoryModal";
import GenerateQueryModal from "components/Modals/GenerateQueryModal";

function Query({ onQueryExecute }) {
  const dispatch = useDispatch();
  const { tableSelected, databaseSelected } = useSelector(
    (state) => state.database
  );

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalGenerate, setOpenModalGenerate] = useState(false);

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
