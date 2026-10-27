import styles from './SummaryTable.module.css';

export default function SummaryTable({ rows }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table} dir="rtl">
        <thead><tr><th>ما قاله الإمام</th><th>ما نتعلمه</th></tr></thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.said}-${index}`}>
              <td>{row.said}</td>
              <td>{row.lesson}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
