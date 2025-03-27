import styles from "components/Chip/Chip.module.css";

function Chip({ icon, text, isActive, onClick }) {
  return (
    <div
      className={`${styles.container} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}

export default Chip;
