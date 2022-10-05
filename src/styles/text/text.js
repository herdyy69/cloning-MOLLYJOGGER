import styles from "./text.module.css";

export default function Text({ children }) {
  return <p className={styles.sm}>{children}</p>;
}
