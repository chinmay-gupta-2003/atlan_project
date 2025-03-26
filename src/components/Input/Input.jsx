import styles from "./Input.module.css";

function Input({
  type,
  placeholder,
  onChange,
  name,
  required,
  value,
  extraClasses,
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={`${styles.input} ${extraClasses}`}
    />
  );
}

export default Input;
