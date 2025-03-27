import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BoltIcon, ClockIcon, SparklesIcon } from "@heroicons/react/24/solid";

import styles from "components/Query/Query.module.css";
import {
  setDatabaseSelected,
  setTableSelected,
  setViewSelected,
} from "store/databaseSlice";
import { databases } from "constants/databases";
import { tables } from "constants/tables";

function Query({ query, setQuery, onQueryExecute }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const { tableSelected, databaseSelected } = useSelector(
    (state) => state.database
  );

  const handleFindClick = () => {
    if (!query) return toast.error("Please type a query");

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
        <ClockIcon height={18} className={styles.queryIcon} />
        <input
          type="text"
          placeholder="Type a query, or generate using AI"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
      </div>

      <button className={styles.btn} onClick={handleFindClick}>
        <span>Execute</span>
        <BoltIcon height={16} />
      </button>

      <button className={`${styles.btn} ${styles.btnGradient}`}>
        <span>Generate</span>
        <SparklesIcon height={16} />
      </button>
    </div>
  );
}

export default Query;
