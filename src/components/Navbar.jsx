import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar} dir="rtl" aria-label="التنقل الرئيسي">
      <Link to="/" className={styles.brand}>وصية الإمام علي (عليه السلام)</Link>
      <Link to="/" className={styles.home}>الرئيسية</Link>
    </nav>
  );
}
