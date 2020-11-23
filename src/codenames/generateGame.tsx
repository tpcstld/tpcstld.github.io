import seedrandom from 'seedrandom';

import {
  CodenamesCardType,
  GameState,
  NUM_ASSASSIN,
  NUM_FIRST_PLAYER,
  NUM_NEUTRAL,
  NUM_SECOND_PLAYER,
} from './CodenameConstants';
import Words from './Words';

function shuffleArray<T>(array: Array<T>, rng: seedrandom.prng): Array<T> {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(rng() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function generateGame(seed: string): GameState {
  const rng = seedrandom(seed);

  const playerOrder =
    rng() > 0.5
      ? [CodenamesCardType.BLUE, CodenamesCardType.RED]
      : [CodenamesCardType.RED, CodenamesCardType.BLUE];

  const cardTypes = shuffleArray(
    [
      ...Array<CodenamesCardType>(NUM_FIRST_PLAYER).fill(playerOrder[0]),
      ...Array<CodenamesCardType>(NUM_SECOND_PLAYER).fill(playerOrder[1]),
      ...Array<CodenamesCardType>(NUM_ASSASSIN).fill(
        CodenamesCardType.ASSASSIN,
      ),
      ...Array<CodenamesCardType>(NUM_NEUTRAL).fill(CodenamesCardType.NEUTRAL),
    ],
    rng,
  );

  const words = shuffleArray(Words, rng);

  const board = cardTypes.map((cardType, index) => ({
    type: cardType,
    content: words[index],
  }));

  return {
    firstPlayer: playerOrder[0],
    board,
  };
}
