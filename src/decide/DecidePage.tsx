import {useEffect, useState} from 'react';

import styles from './DecidePage.module.css';

export default function DecidePage() {
  const [decision, setDecision] = useState<boolean | null>(null);

  useEffect(() => {
    setDecision(Math.random() < 0.5);
  }, []);

  if (decision == null) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={decision ? styles.yes : styles.no}>
        {decision ? 'Yes!' : 'No!'}
      </h1>
      <h4>{decision ? 'Go do it!' : "Don't do it!"}</h4>
    </div>
  );
}
