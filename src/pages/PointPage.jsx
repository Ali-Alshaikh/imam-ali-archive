import { Link, Navigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { getPointById } from '../data/points.js';
import PointPageLayout from './components/PointPageLayout.jsx';
import styles from './PointPage.module.css';

export default function PointPage() {
  const { id } = useParams();
  const point = getPointById(id);

  if (!point) return <Navigate to="/" replace />;

  return (
    <div className={styles.page} dir="rtl">
      <Navbar />
      <main className={styles.container}>
        <Link to="/" className={styles.backLink}>→ العودة إلى جميع النقاط</Link>
        <PointPageLayout point={point} />
      </main>
    </div>
  );
}
