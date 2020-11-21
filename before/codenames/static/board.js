function main() {
  const seed = getSeed();
  const game = generateGame(seed);

  game.board.map((row, yy) => row.map((card, xx) => {
    const cell = getCell(xx, yy);
    cell.style.backgroundColor = card.color;
  }));

  document.getElementById("playerLine").style.backgroundColor =
    game.firstPlayer.color;
}
