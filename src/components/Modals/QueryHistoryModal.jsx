import { useDispatch, useSelector } from "react-redux";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";

import Modal from "components/Modal/Modal";
import styles from "components/Query/Query.module.css";

import { copyToClipboard } from "utils/copyToClipBoard";

function QueryHistoryModal({ openModal, setOpenModal, setQuery }) {
  const { queryHistory } = useSelector((state) => state.database);

  return (
    <Modal open={openModal} setOpen={setOpenModal}>
      <div className={styles.modalContainer}>
        {!queryHistory.length && <span>No history found</span>}

        {queryHistory.length > 0 &&
          queryHistory.map((query, index) => (
            <div
              key={index}
              className={styles.modalQuery}
              onClick={() => {
                copyToClipboard(query.query);
                setOpenModal(false);
                setQuery(query.query);
              }}
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
  );
}

export default QueryHistoryModal;
