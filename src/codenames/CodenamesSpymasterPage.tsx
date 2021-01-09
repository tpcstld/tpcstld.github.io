import {Helmet} from 'react-helmet';

import PageWrapper from '../info-pages/PageWrapper';

import CodenamesBoard from './CodenamesBoard';
import useCodenamesGameState from './useCodenamesGameState';

import styles from './CodenamesAgentPage.module.css';

export default function CodenamesSpymasterPage() {
  const gameState = useCodenamesGameState();

  return (
    <PageWrapper>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>Codenames</title>
        <meta name="description" content="Online codegames player." />
      </Helmet>

      <div className={styles.board}>
        <CodenamesBoard board={gameState.board} />
      </div>
    </PageWrapper>
  );
}
