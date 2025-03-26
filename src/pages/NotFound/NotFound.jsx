import { useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

import notFound from "assets/images/notFound.jpg";
import styles from "pages/NotFound/NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.content}>
      <img src={notFound} alt="Not Found" className={styles.image} />

      <div className={styles.textContainer}>
        <span className={styles.title}>Page Not Found</span>
        <p className={styles.description}>
          We're sorry, the page you requested could not be found.
        </p>
        <button className={styles.button} onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
