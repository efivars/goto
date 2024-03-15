import styles from './app-header.module.scss';

import { AppLink } from '../../shared/ui-kit';

export const AppHeader: React.FC = () => {
  return (
    <div className={styles.Header}>
      <AppLink to="/">Home</AppLink>
      <AppLink to="/hello">Hello</AppLink>
      <AppLink to="/make-link">Make link</AppLink>
    </div>
  );
};
