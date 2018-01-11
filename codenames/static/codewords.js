function wordClicked(xx, yy) {
  const element = getCell(xx, yy);
  console.log(element.style.backgroundColor);
  switch(element.style.backgroundColor) {
  case CardType.RED.color:
    element.style.backgroundColor = CardType.BLUE.color;
    break;
  case CardType.BLUE.color:
    element.style.backgroundColor = CardType.NEUTRAL.color;
    break;
  case "":
    element.style.backgroundColor = CardType.RED.color;
    element.children[0].style.visibility = "hidden";
    break;
  case CardType.ASSASSIN.color:
    element.style.backgroundColor = "";
    element.children[0].style.visibility = "visible";
    break;
  default:
    element.style.backgroundColor = CardType.ASSASSIN.color;
    break;
  }
}

function main() {
  const seed = getSeed();
  Math.seedrandom(seed);
  shuffleArray(WORDS);

  for (let xx = 0; xx < 5; xx++) {
    for (let yy = 0; yy < 5; yy++) {
      const element = getCell(xx, yy);
      element.innerHTML = "<div class=\"text\">" + WORDS[xx * 5 + yy]; "</div>"
    }
  }
}
