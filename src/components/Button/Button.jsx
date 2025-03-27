import { UserIcon } from "@heroicons/react/24/solid";
import styles from "./Button.module.css";

function Button({ onClick, icon, text, type, disabled, extraClasses }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${
        disabled ? styles.disabled : styles.primary
      } ${extraClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
      {icon && <UserIcon width={20} />}
    </button>
  );
}

export default Button;
