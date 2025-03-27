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
  setDatabaseSelected,
  setTableSelected,
  setViewSelected,
} from "store/databaseSlice";
import { databases } from "constants/databases";
import { tables } from "constants/tables";
import { formatDate } from "utils/formatDate";
import { copyToClipboard } from "utils/copyToClipBoard";

function Query({ query, setQuery, onQueryExecute }) {
  const dispatch = useDispatch();
  const { tableSelected, databaseSelected } = useSelector(
    (state) => state.database
  );

  const [active, setActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [allQueries, setAllQueries] = useState([]);

  const handleFindClick = () => {
    if (!query) return toast.error("Please type a query");

    setAllQueries((prev) => [{ time: new Date(), query }, ...prev]);

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
    } else onQueryExecute();
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
          {!allQueries.length && <span>No history found</span>}

          {allQueries.length &&
            allQueries.map((query, index) => (
              <div
                key={index}
                className={styles.modalQuery}
                onClick={() => copyToClipboard(query.query)}
              >
                <span className={styles.date}>{formatDate(query.time)}</span>
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
