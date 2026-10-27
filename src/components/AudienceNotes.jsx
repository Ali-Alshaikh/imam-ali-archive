import styles from './AudienceNotes.module.css';

export default function AudienceNotes({ kids, adults }) {
  return (
    <div className={styles.grid}>
      <section className={`${styles.card} ${styles.kids}`}>
        <h3>للصغار</h3>
        <p>{kids}</p>
      </section>
      <section className={`${styles.card} ${styles.adults}`}>
        <h3>للكبار</h3>
        <p>{adults}</p>
      </section>
    </div>
  );
}
