import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

import { tables } from "constants/tables";
import { databases } from "constants/databases";
import avatar from "assets/images/avatar.jpg";
import {
  ArrowRightEndOnRectangleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";

import styles from "components/Sidebar/Sidebar.module.css";
import {
  setDatabaseSelected,
  setQuerySelected,
  setTableSelected,
  setViewSelected,
} from "store/databaseSlice";
import { copyToClipboard } from "utils/copyToClipBoard";
import { columnsMapping } from "constants/mappings";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tableSelected, databaseSelected } = useSelector(
    (state) => state.database
  );

  const [showTableSchema, setShowTableSchema] = useState(false);

  const logout = () => {
    localStorage.clear();

    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.sidebar} ${styles.sidebarGradient} hiddenScroll`}
      >
        <div className={styles.userInfo}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
          <div>
            <p className={styles.userName}>Welcome Back,</p>
            <p className={styles.userName}>Chinmay</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.subContainer}>
          <div className={styles.flexAlign}>
            <CircleStackIcon className={styles.icon} />
            <p className={styles.heading}>Databases</p>
          </div>

          <div className={`${styles.databaseList} ${styles.hiddenScroll}`}>
            {databases.map((database) => (
              <div
                key={database.id}
                className={`${styles.databaseLink} ${
                  databaseSelected.id === database.id ? styles.active : ""
                }`}
                onClick={() => {
                  dispatch(setDatabaseSelected(database));
                  dispatch(setTableSelected({ id: "", name: "" }));
                  dispatch(setViewSelected(""));
                }}
              >
                <p>{database.name}</p>
                {databaseSelected.id === database.id && (
                  <ClipboardDocumentCheckIcon
                    onClick={() =>
                      copyToClipboard(database.name, "Database name")
                    }
                    height={16}
                    className={styles.copyIcon}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.subContainer}>
          <div className={styles.flexAlign}>
            <TableCellsIcon className={styles.icon} />
            <p className={styles.heading}>Tables</p>
          </div>
          <div className={`${styles.databaseList} ${styles.hiddenScroll}`}>
            {!databaseSelected.id && (
              <p className={styles.text}>
                Please select a database to view tables.
              </p>
            )}

            {databaseSelected.id &&
              tables[databaseSelected.id].map((table) => (
                <div
                  className={`${styles.tableSchemaContainer} ${
                    tableSelected.id === table.id ? styles.active : ""
                  }`}
                >
                  <div
                    key={table.id}
                    className={styles.databaseLink}
                    onClick={() => {
                      dispatch(setTableSelected(table));
                      dispatch(setViewSelected("table"));
                      dispatch(setQuerySelected("1"));
                      setShowTableSchema(false);
                    }}
                  >
                    {tableSelected.id === table.id && !showTableSchema && (
                      <ChevronRightIcon
                        height={16}
                        className={styles.chevronIcon}
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowTableSchema(true);
                        }}
                      />
                    )}
                    {tableSelected.id === table.id && showTableSchema && (
                      <ChevronDownIcon
                        height={16}
                        className={styles.chevronIcon}
                        onClick={() => setShowTableSchema(false)}
                      />
                    )}
                    <p>{table.name}</p>
                    {tableSelected.id === table.id && (
                      <ClipboardDocumentCheckIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(table.name, "Table name");
                        }}
                        height={16}
                        className={styles.copyIcon}
                      />
                    )}
                  </div>
                  {tableSelected.id === table.id && showTableSchema && (
                    <div className={styles.tableSchema}>
                      {columnsMapping[tableSelected.id].map((column) => (
                        <div className={styles.schemaType}>
                          <strong>{column.accessorKey} : </strong>
                          <i>{typeof column.accessorKey}</i>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className={styles.logout} onClick={logout}>
          <ArrowRightEndOnRectangleIcon className={styles.icon} />
          <span>Logout</span>
        </div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
