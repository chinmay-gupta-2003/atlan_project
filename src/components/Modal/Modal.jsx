import { Modal as MUIModal } from "@mui/material";

import styles from "components/Modal/Modal.module.css";

function Modal({ open, setOpen, children }) {
  return (
    <MUIModal
      open={open}
      onClose={() => setOpen(false)}
      className={styles.container}
    >
      <div className={styles.content}>{children}</div>
    </MUIModal>
  );
}

export default Modal;
