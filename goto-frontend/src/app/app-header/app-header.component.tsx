import { Link } from 'wouter';

import styles from './app-header.module.scss';

export const AppHeader: React.FC = () => {
  return (
    <div className={styles.Header}>
      <Link to="/">Home</Link>
      <Link to="/hello">Hello</Link>
      <Link to="/make-link">Make link</Link>
    </div>
  );
};
