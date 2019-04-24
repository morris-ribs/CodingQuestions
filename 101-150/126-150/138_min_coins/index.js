const DENOMINATIONS = [1, 5, 10, 25];

function mininumCoinsDp(N) {
  const cache = [];
  let i = 0;
  while (i < (N+1)) {
    cache.push(0);
    i++;
  }

  for (let d = 0; d < DENOMINATIONS.length; d++) {
    const denomination = DENOMINATIONS[d];
    if (denomination < cache.length) {
      cache[denomination] = 1;
    }
  }

  for (let x = 1; x < (N+1); x++) {
    let dArray = [];
    for (let d = 0; d < DENOMINATIONS.length; d++) {
      const denomination = DENOMINATIONS[d];
      if ((x - denomination) >= 0) {
        dArray.push(cache[x-denomination]);
      }
    }
    cache[x] = Math.min(...dArray) + 1;
  }

  return cache[N];
}

console.log(mininumCoinsDp(16)); // expected 3