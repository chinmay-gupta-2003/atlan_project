import { toast } from "react-toastify";
import { useNavigate, Outlet } from "react-router-dom";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

import avatar from "assets/images/avatar.jpg";
import styles from "components/Sidebar/Sidebar.module.css";

function Sidebar({ tableSelected, setTableSelected }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.sidebar} ${styles.sidebarGradient}`}>
        <div className={styles.userInfo}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
          <div>
            <p className={styles.userName}>Welcome Back,</p>
            <p className={styles.userName}>Chinmay</p>
          </div>
        </div>

        <div className={`${styles.conversationList} ${styles.hiddenScroll}`}>
          {[].map((conversation) => (
            <div
              key={conversation._id}
              className={`${styles.chatLink} ${
                tableSelected._id === conversation._id ? styles.active : ""
              }`}
              onClick={() => setTableSelected(conversation)}
            >
              <p>{conversation.name}</p>
            </div>
          ))}
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
