import styles from './AttentionNote.module.css';

export default function AttentionNote({ children }) {
  return (
    <aside className={styles.note}>
      <h3>ما يلفت النظر</h3>
      <p>{children}</p>
    </aside>
  );
}
