const NUM_TRIALS = 1000;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function sum(numbers=[]) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numbers.reduce(reducer, 0);
}

function d6() {
  return getRandomInt(1,7);
}

function gameOne() {
  let prev = null;
  let curr = null;
  let cost = 0;
  while (prev != 5 || curr != 6) {
    prev = curr;
    curr = d6();
    cost++;
  }
  return cost;
}

function evGameOne() {
  const games = [];
  let i = 0;
  while (i < NUM_TRIALS) {
    i++;
    games.push(gameOne());
  }
  return sum(games) / games.length;
}

function gameTwo() {
  let prev = null;
  let curr = null;
  let cost = 0;
  while (prev != 5 || curr != 5) {
    prev = curr;
    curr = d6();
    cost++;
  }
  return cost;
}

function evGameTwo() {
  const games = [];
  let i = 0;
  while (i < NUM_TRIALS) {
    i++;
    games.push(gameTwo());
  }
  return sum(games) / games.length;
}

console.log(evGameOne());
console.log(evGameTwo());