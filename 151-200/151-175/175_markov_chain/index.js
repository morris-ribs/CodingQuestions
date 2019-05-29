function transformProbs(transProbs=[]) {
  const d = {};
  for (let i = 0; i < transProbs.length; i++) {
    const transProb = transProbs[i];
    if (typeof d[transProb.start] === "undefined") {
      d[transProb.start] = {};
    }
    d[transProb.start][transProb.end] = transProb.prob;
  }
  return d;
}

function nextState(currentState="", probsDict={}) {
  let r = Math.random();
  const keys = Object.keys(probsDict[currentState]);
  for (let i = 0; i < keys.length; i++) {
    const possibleState = keys[i];
    const probability = probsDict[currentState][possibleState];
    r -= probability;
    if (r <= 0) {
      return possibleState;
    }  
  }
}

function histogramCounts(start="", transProbs=[], numSteps=0) {
  const probsDict = transformProbs(transProbs);
  const countHistogram = {};
  let currentState = start;

  let i = 1;
  while (i  <= numSteps) {
    if (typeof countHistogram[currentState] === "undefined") {
      countHistogram[currentState] = 0;
    }
    countHistogram[currentState]++;
    currentState = nextState(currentState, probsDict);
    i++;
  }
  return countHistogram;
}

const transProbs = [
  { start: 'a', end: 'a', prob: 0.9 },
  { start: 'a', end: 'b', prob: 0.075 },
  { start: 'a', end: 'c', prob: 0.025 },
  { start: 'b', end: 'a', prob: 0.15 },
  { start: 'b', end: 'b', prob: 0.8 },
  { start: 'b', end: 'c', prob: 0.05 },
  { start: 'c', end: 'a', prob: 0.25 },
  { start: 'c', end: 'b', prob: 0.25 },
  { start: 'c', end: 'c', prob: 0.5 }
];
console.log(histogramCounts('a', transProbs, 5000)); // expected something like {a: ~3000, b: ~1000, c: ~300}