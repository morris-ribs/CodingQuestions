function canReachEnd(arr=[]) {
  let furthestSoFar = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (i > furthestSoFar) {
      break;
    }
    furthestSoFar = Math.max(furthestSoFar, i + num);
  }
  return (furthestSoFar >= arr.length - 1);
}

console.log(canReachEnd([1, 3, 1, 2, 0, 1])); // expected true
console.log(canReachEnd([1, 2, 1, 0, 0])); // expected false