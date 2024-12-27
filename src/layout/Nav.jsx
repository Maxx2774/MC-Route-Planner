import { Link, useLocation } from "react-router-dom";

import { FaHome, FaRegUserCircle, FaRoute, FaBookmark } from "react-icons/fa";
import { useAuth } from "../context/AuthProvider";
import styles from "../css-modules/layout/nav.module.css";

export default function Nav() {
  const { token } = useAuth();

  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? styles.active : "");

  return (
    <nav className={styles.nav}>
      {token ? (
        <>
          <section>
            <Link
              to="/home"
              className={`${styles.navitems} ${isActive("/home")}`}
            >
              HOME
              <FaHome size={25} className={styles.navFaHome} />
            </Link>
          </section>

          <section className="flex">
            <Link
              to="/routeplanner"
              className={`${styles.navitems} ${isActive("/routeplanner")} `}
            >
              PLANNER <FaRoute size={25} className={styles.navFaRoute} />
            </Link>
          </section>
          <section className="flex">
            <Link
              to="/savedroutes"
              className={`${styles.navitems} ${isActive("/savedroutes")} `}
            >
              SAVED
              <FaBookmark size={20} className={styles.navFaBookmark} />
            </Link>
          </section>

          <Link
            to="/profile"
            className={`${styles.navitems} ${isActive("/profile")} `}
          >
            <FaRegUserCircle size={45} />
          </Link>
        </>
      ) : (
        <section className="flex">
          <Link
            to="/routeplanner"
            className={`${styles.navitems} ${isActive("/routeplanner")} `}
          >
            PLANNER <FaRoute size={25} className={styles.navFaRoute} />
          </Link>
        </section>
      )}
    </nav>
  );
}
