import Input from "components/Input/Input";
import Button from "components/Button/Button";
import illustration from "assets/svg/login.svg";
import styles from "./Form.module.css";

function Form({ userData, setUserData, login }) {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <span className={styles.heading}>
          <span>Data Analyst</span>
        </span>

        <div className={styles.inputContainer}>
          <Input
            type="email"
            required={true}
            placeholder="Email ID"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <Input
            type="password"
            required={true}
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <Button type="submit" onClick={login} text={"Login"} icon={true} />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={illustration} alt="img" className={styles.image} />
      </div>
    </div>
  );
}

export default Form;
