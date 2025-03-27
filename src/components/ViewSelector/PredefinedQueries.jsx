import { useDispatch, useSelector } from "react-redux";

import Chip from "components/Chip/Chip";
import styles from "components/ViewSelector/ViewSelector.module.css";

import { addQueryToHistory, setQuerySelected } from "store/databaseSlice";
import { formatDate } from "utils/formatDate";

function PredefinedQueries({ onQueryExecute }) {
  const dispatch = useDispatch();
  const { querySelected } = useSelector((state) => state.database);

  const handleViewChange = (key, label) => {
    dispatch(setQuerySelected(key));
    dispatch(addQueryToHistory({ time: formatDate(new Date()), query: label }));

    onQueryExecute();
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
