import { Link } from 'react-router-dom';
import ImamQuote from '../../components/ImamQuote.jsx';
import Explanation from '../../components/Explanation.jsx';
import AttentionNote from '../../components/AttentionNote.jsx';
import SummaryTable from '../../components/SummaryTable.jsx';
import AudienceNotes from '../../components/AudienceNotes.jsx';
import styles from './PointPageLayout.module.css';

const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
function toArabicNumber(value) {
  return String(value).replace(/\d/g, (digit) => arabicDigits[Number(digit)]);
}

export default function PointPageLayout({ point }) {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>النقطة {toArabicNumber(point.id)}</p>
        <h1>{point.title}</h1>
        <p className={styles.intro}>{point.intro}</p>
        <p className={styles.source}>
          المصدر: {point.source} — <a href={point.sourceUrl} target="_blank" rel="noreferrer">موقع البلاغة</a>
        </p>
      </header>

      {point.moments.map((moment, index) => (
        <section className={styles.moment} key={`${point.id}-${index}`}>
          <h2>{moment.heading}</h2>
          {moment.quotes.map((quote, quoteIndex) => (
            <ImamQuote key={`${index}-${quoteIndex}`} label={quote.label} text={quote.text} />
          ))}
          {moment.explanation && <Explanation>{moment.explanation}</Explanation>}
          {moment.list?.length > 0 && (
            <ul className={styles.explanationList}>
              {moment.list.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
          {moment.attention && <AttentionNote>{moment.attention}</AttentionNote>}
        </section>
      ))}

      {point.summary?.length > 0 && (
        <section className={styles.section}>
          <h2>الخلاصة</h2>
          <SummaryTable rows={point.summary} />
        </section>
      )}

      {point.audienceNotes && (
        <section className={styles.section}>
          <h2>ملاحظات لعرضها على الجمهور</h2>
          <AudienceNotes kids={point.audienceNotes.kids} adults={point.audienceNotes.adults} />
          {point.extraNote && <p className={styles.extraNote}>{point.extraNote}</p>}
        </section>
      )}

      <footer className={styles.footer}>
        <h2>سؤال للمتابعة</h2>
        <p>{point.followUpQuestion}</p>
        <Link to="/" className={styles.homeLink}>العودة إلى فهرس النقاط</Link>
      </footer>
    </article>
  );
}
