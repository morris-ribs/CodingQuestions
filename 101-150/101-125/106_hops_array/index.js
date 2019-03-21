function canReachEnd(hops=[]) {
  let stepsLeft = 1;
  for (let i = 0; i < (hops.length - 1); i++) {
    const hop = hops[i];
    stepsLeft = Math.max(stepsLeft-1, hop);
    if (stepsLeft === 0) {
      return false;
    }
  }

  return true;
}

console.log(canReachEnd([2, 0, 1, 0])); // expected true
console.log(canReachEnd([1, 1, 0, 1])); // expected false
