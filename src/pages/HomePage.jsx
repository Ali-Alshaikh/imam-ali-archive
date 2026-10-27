import { Link } from 'react-router-dom';
import { points } from '../data/points.js';
import Navbar from '../components/Navbar.jsx';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page} dir="rtl">
      <Navbar />
      <main className={styles.container}>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>نهج البلاغة — الرسالة ٣١</p>

          <h1>
            ٣١- ومن وصيته (عليه السلام) وصية له للحسن بن علي (عليه السلام)
            كتبها إليه بحاضرين عند انصرافه من صفين
          </h1>

          <p>
            نقاط الوصية مرتبة في صفحات مستقلة، لتسهيل القراءة والعرض والطباعة.
          </p>
        </header>


        <section aria-labelledby="points-heading" className={styles.pointsSection}>
          <h2 id="points-heading">نقاط العرض</h2>
          <div className={styles.pointList}>
            {points.map((point) => (
              <Link className={styles.pointCard} to={`/points/${point.id}`} key={point.id}>
                <span className={styles.pointNumber}>النقطة {point.id === 1 ? '١' : point.id}</span>
                <span className={styles.pointTitle}>{point.title}</span>
                <span className={styles.openLabel}>فتح الصفحة ←</span>
              </Link>
            ))}
          </div>
          {points.length === 1 && (
            <p className={styles.pendingNote}>يمكن إضافة النقاط التالية إلى <code>points.js</code> عند تجهيز مادتها الأصلية.</p>
          )}
        </section>
      </main>
    </div>
  );
}
