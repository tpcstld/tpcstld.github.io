import {useEffect, useState} from 'react';

import {
  GameState,
  CodenamesCardType,
  NUM_CARDS,
  CodenamesCard,
} from './CodenameConstants';
import generateGame from './generateGame';
import getGameSeed from './getGameSeed';

const DEFAULT_GAME_STATE: GameState = {
  firstPlayer: CodenamesCardType.BLUE,
  board: Array(NUM_CARDS)
    .fill(null)
    .map<CodenamesCard>(() => ({
      type: CodenamesCardType.UNKNOWN,
      content: 'Loading...',
    })),
};

export default function useCodenamesGameState(): GameState {
  const [gameState, setGameState] = useState(DEFAULT_GAME_STATE);

  useEffect(() => {
    setGameState(generateGame(getGameSeed()));
  }, []);

  return gameState;
}
