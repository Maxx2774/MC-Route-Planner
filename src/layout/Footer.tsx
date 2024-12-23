import { Link } from "react-router-dom";
import styles from "../css-modules/layout/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <Link to="/about">About</Link>
      </section>
    </footer>
  );
}
