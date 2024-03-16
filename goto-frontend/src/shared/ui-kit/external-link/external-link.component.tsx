import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { IExternalLink } from './external-link.types';
import styles from './external-link.module.scss';

export const ExternalLink: React.FC<IExternalLink> = ({ href, openInNewTab = true, children }) => {
  return (
    <a href={href} target={openInNewTab ? '_blank' : ''} className={styles.ExternalLink}>
      <span className={styles.Text}>{children}</span>
      {openInNewTab && (
        <>
          &nbsp;
          <sup>
            <FaArrowUpRightFromSquare className={styles.Icon} />
          </sup>
        </>
      )}
    </a>
  );
};
