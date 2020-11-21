import {ReactNode} from 'react';

import styles from './PageWrapper.module.css';

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({children}: PageWrapperProps) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
