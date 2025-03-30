import { useDispatch, useSelector } from "react-redux";

import Chip from "components/Chip/Chip";
import styles from "components/ViewSelector/ViewSelector.module.css";

import {
  addQueryToHistory,
  setQuerySelected,
  setTableSelected,
  setViewSelected,
} from "store/databaseSlice";
import { formatDate } from "utils/formatDate";
import { tables } from "constants/tables";

function PredefinedQueries({ onQueryExecute }) {
  const dispatch = useDispatch();
  const { querySelected, databaseSelected, tableSelected } = useSelector(
    (state) => state.database
  );

  const handleViewChange = (key, label) => {
    if (!tableSelected.id) {
      const availableTables = tables[databaseSelected.id];

      const randomTable =
        availableTables[Math.floor(Math.random() * availableTables.length)];

      dispatch(setTableSelected(randomTable));

      dispatch(setViewSelected("table"));
    } else onQueryExecute();

    dispatch(setQuerySelected(key));
    dispatch(addQueryToHistory({ time: formatDate(new Date()), query: label }));
  };

  const queryOptions = [
    {
      key: "1",
      label: "SELECT * from USERS",
    },
    {
      key: "2",
      label: "SELECT COUNT(*) AS total_products FROM products",
    },
    {
      key: "3",
      label: "SELECT * FROM customers WHERE city = 'New York'",
    },
    {
      key: "4",
      label: "SELECT * FROM orders WHERE order_date >= NOW() - INTERVAL 7 DAY ",
    },
  ];

  return (
    <div className={styles.container}>
      {queryOptions.map(({ key, label }) => (
        <Chip
          key={key}
          text={label}
          isActive={querySelected === key}
          onClick={() => handleViewChange(key, label)}
        />
      ))}
    </div>
  );
}

export default PredefinedQueries;
