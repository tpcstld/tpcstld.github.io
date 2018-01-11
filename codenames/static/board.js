function _getCell(x, y) {
  return document.getElementById(`cell_${x + 1}_${y + 1}`);
}

function generateSeed(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function main() {
  const hash = window.location.hash;
  const seed = hash ? hash.substring(1) : generateSeed(5);
  const game = generateGame(seed);

  game.board.map((row, yy) => row.map((card, xx) => {
    const cell = _getCell(xx, yy);
    cell.style.backgroundColor = card.color;
  }));

  document.getElementById("playerLine").style.backgroundColor =
    game.firstPlayer.color;

  window.location.hash = seed;
}
