import styles from './ImamQuote.module.css';

export default function ImamQuote({ label = 'كلام الإمام (عليه السلام):', text }) {
  return (
    <figure className={styles.quote} dir="rtl">
      <figcaption>{label}</figcaption>
      <blockquote>{text}</blockquote>
    </figure>
  );
}
