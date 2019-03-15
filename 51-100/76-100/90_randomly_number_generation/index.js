function processList(n, l) {
  const allNumsSet = new Set();
  let i = 0;
  while (i < n) {
    allNumsSet.add(i++);
  }

  const lSet = new Set(l);
  const numsSet = new Set(
    [...allNumsSet].filter(x => !lSet.has(x))
  );
  let result = [];
  let iterator1 = numsSet.values();
  let itResult = iterator1.next();
  while (!!itResult && !itResult.done) {
    result.push(itResult.value);
    itResult = iterator1.next();
  }

  return result;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomNumberExcluingList(n, l) {
  const numsList = processList(n, l);
  const idx = getRandomInt(numsList.length);
  return numsList[idx];
}

console.log(randomNumberExcluingList(4, [1, 2, 5]));
