import styles from "components/Table/Table.module.css";

function Table({ data = [], columns = [] }) {
  return (
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
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col, j) => (
                <td key={j}>{row[col.accessorKey]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
