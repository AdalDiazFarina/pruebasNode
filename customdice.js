const MIN_DICE = 1;
const SIDES = 10;
function randomdice(sides) {
  return (diceResult = MIN_DICE + Math.floor(Math.random() * sides));
}

console.log(randomdice(SIDES));
