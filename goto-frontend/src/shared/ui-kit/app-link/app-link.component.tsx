import { Link as WouterLink } from 'wouter';
import cx from 'classnames';

import styles from './app-link.module.scss';
import { IAppLink } from './app-link.types';
import { useShouldHighlight } from './app-link.hook';

export const AppLink: React.FC<IAppLink> = ({ children, to, highlightMode = 'auto' }) => {
  const shouldHighlight = useShouldHighlight({ to, highlightMode });

  return (
    <WouterLink to={to} className={cx(styles.AppLink, { [styles.Highlighted]: shouldHighlight })}>
      {children}
    </WouterLink>
  );
};
