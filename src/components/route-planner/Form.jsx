import styles from "../../css-modules/pages/routeplanner.module.css";

export default function Form() {
  return (
    <section className={styles.inputContainer}>
      <input
        name="startpoint"
        type="text"
        placeholder="Startpoint"
        className={styles.input}
      />
      <input
        name="endpoint"
        type="text"
        placeholder="Final destination"
        className={styles.input}
      />
    </section>
  );
}
