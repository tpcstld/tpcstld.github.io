import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';

import PageWrapper from '../info-pages/PageWrapper';

import {CodenamesBoardType, CodenamesCardType} from './CodenameConstants';
import CodenamesBoard from './CodenamesBoard';
import useCodenamesGameState from './useCodenamesGameState';

import styles from './CodenamesAgentPage.module.css';

function getInitialBoardState(
  gameBoard: CodenamesBoardType,
): CodenamesBoardType {
  return gameBoard.map((card) => ({
    ...card,
    type: CodenamesCardType.UNKNOWN,
  }));
}

export default function CodenamesAgentPage() {
  const gameState = useCodenamesGameState();

  const [board, setBoard] = useState(getInitialBoardState(gameState.board));

  useEffect(() => {
    setBoard(getInitialBoardState(gameState.board));
  }, [gameState.board]);

  function handleClick(index: number) {
    const newBoard = [...board];
    newBoard[index].type = gameState.board[index].type;
    setBoard(newBoard);
  }

  return (
    <PageWrapper>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>Codenames</title>
        <meta name="description" content="Online codegames player." />
      </Helmet>

      <div className={styles.board}>
        <CodenamesBoard board={board} onClick={handleClick} />
      </div>
    </PageWrapper>
  );
}
