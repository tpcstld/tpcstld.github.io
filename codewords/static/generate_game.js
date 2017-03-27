// The types that a card can be.
const CardType = {
  // Cards corresponding to red agents.
  RED: {
    color: 'darkred',
  },
  // Cards corresponding to blue agents.
  BLUE: {
    color: 'darkblue',
  },
  // Cards corresponding to innocent bystanders.
  NEUTRAL: {
    color: '#D4B886',
  },
  // Card corresponding to the assassin.
  ASSASSIN: {
    color: 'black',
  },
};

const GameDetails = {
  BOARD_LENGTH: 5,
  BOARD_WIDTH: 5,
};

/**
 * Shuffles an array in place.
 *
 * @param array The array to shuffle.
 */
function _fy(a,b,c,d){
  c=a.length;while(c)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d
}

/**
 * Generates a 5x5 grid corresponding to the status of the game board in code
 * words. Each element in the grid will be a single CardType.
 *
 * @param a String that acts as the seed for the game.
 *
 * @return an object containing:
 *    firstPlayer: The cardType of the first player.
 *    board: The 5x5 game board.
 */
function generateGame(seed) {
  Math.seedrandom(seed);

  const playerOrder = Math.random() > 0.5
    ? [CardType.BLUE, CardType.RED]
    : [CardType.RED, CardType.BLUE];
  const positions = Array.apply(null, {
        length: GameDetails.BOARD_WIDTH * GameDetails.BOARD_LENGTH,
    }).map((a, i) => i);
  _fy(positions);

  const board = Array.from(Array(GameDetails.BOARD_LENGTH))
    .map((_, yy) => Array.from(Array(GameDetails.BOARD_WIDTH))
    .map((_, xx) => {
      const position = positions.indexOf(yy * GameDetails.BOARD_WIDTH + xx);
      if (position < 9) {
        return playerOrder[0];
      } else if (position < 9 + 8) {
        return playerOrder[1];
      } else if (position < 9 + 8 + 1) {
        return CardType.ASSASSIN;
      }
      return CardType.NEUTRAL;
    }));

  return {
    firstPlayer: playerOrder[0],
    board: board,
  }
}
