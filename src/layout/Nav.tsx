import { Link, useLocation } from "react-router-dom";
import { FaHome, FaRegUserCircle, FaRoute, FaBookmark } from "react-icons/fa";
import styles from "../css-modules/layout/nav.module.css";
import bultenImg from "../assets/images/dekal-bulten-raceway.jpg";

export default function Nav() {
  const location = useLocation();
  const signedIn = true;

  const isActive = (path: string) =>
    location.pathname === path ? styles.active : "";

  return (
    <nav className={styles.nav}>
      <figure className={styles.navitems}>
        <img
          src={bultenImg}
          alt="Bulten raceway"
          className={styles.bultenImg}
        />
      </figure>

      <Link to="/" className={`${styles.navitems} ${isActive("/")}`}>
        <FaHome size={40} />
      </Link>
      <section className="flex relative">
        <Link
          to="/routeplanner"
          className={`${styles.navitems} ${isActive("/routeplanner")}`}
        >
          ROUTE PLANNER
        </Link>
        <FaRoute
          size={27}
          className={` ${styles.navitems}  ${isActive("/routeplanner")} ${
            styles.navFaRoute
          } absolute left-[245px] top-[2px] `}
        />
      </section>
      <section className="flex relative">
        <Link
          to="/savedroutes"
          className={`${styles.navitems} ${isActive("/savedroutes")} `}
        >
          SAVED ROUTES
        </Link>
        <FaBookmark
          size={20}
          className={`${styles.navitems} ${isActive("/savedroutes")} ${
            styles.navFaBookmark
          } absolute left-[217px] top-[10px]`}
        />
      </section>

      {signedIn ? (
        <Link to="/" className={styles.navitems}>
          SIGN OUT
        </Link>
      ) : (
        <Link
          to="/register"
          className={`${styles.navitems} ${isActive("/register")}`}
        >
          Register
        </Link>
      )}

      <Link
        to="/profile"
        className={`${styles.navitems} ${isActive("/profile")}`}
      >
        <FaRegUserCircle size={40} />
      </Link>
    </nav>
  );
}
