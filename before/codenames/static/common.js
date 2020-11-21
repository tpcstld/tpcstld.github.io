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

const CARDTYPES = ['RED', 'BLUE', 'NEUTRAL', 'ASSASSIN'];

const GameDetails = {
  BOARD_LENGTH: 5,
  BOARD_WIDTH: 5,
};

function getCell(x, y) {
  return document.getElementById(`cell_${x + 1}_${y + 1}`);
}

function _generateSeed(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function getSeed() {
  const hash = window.location.hash;
  if (hash) {
    return hash.substring(1);
  }
  const seed = _generateSeed(5);
  window.location.hash = seed;
  return seed;
}

function shuffleArray(a,b,c,d) {
  c=a.length;while(c)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d
}
