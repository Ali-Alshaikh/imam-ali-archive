import styles from './Explanation.module.css';

export default function Explanation({ children }) {
  return (
    <div className={styles.explanation}>
      <h3>الشرح بلغة اليوم</h3>
      <p>{children}</p>
    </div>
  );
}
