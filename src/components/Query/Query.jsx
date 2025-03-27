import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  BoltIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

import styles from "components/Query/Query.module.css";
import Modal from "components/Modal/Modal";

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
import { copyToClipboard } from "utils/copyToClipBoard";

function Query({ query, setQuery, onQueryExecute }) {
  const dispatch = useDispatch();
  const { tableSelected, databaseSelected, queryHistory } = useSelector(
    (state) => state.database
  );

  const [active, setActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleFindClick = () => {
    if (!query) return toast.error("Please type a query");

    dispatch(addQueryToHistory({ time: formatDate(new Date()), query }));

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
    if (e.key === "Enter") handleFindClick();
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

      <button className={styles.btn} onClick={handleFindClick} type="submit">
        <span>Execute</span>
        <BoltIcon height={16} />
      </button>

      <button className={`${styles.btn} ${styles.btnGradient}`}>
        <span>Generate</span>
        <SparklesIcon height={16} />
      </button>

      <Modal open={openModal} setOpen={setOpenModal}>
        <div className={styles.modalContainer}>
          {!queryHistory.length && <span>No history found</span>}

          {queryHistory.length > 0 &&
            queryHistory.map((query, index) => (
              <div
                key={index}
                className={styles.modalQuery}
                onClick={() => copyToClipboard(query.query)}
              >
                <span className={styles.date}>{query.time}</span>
                <span>{query.query}</span>

                <ClipboardDocumentCheckIcon
                  height={18}
                  className={styles.copyIcon}
                />
              </div>
            ))}
        </div>
      </Modal>
    </div>
  );
}

export default Query;
