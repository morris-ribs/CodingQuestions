function findContinuousK(list = [], k) {
  const previous = {};
  let sum = 0;
  // sublist starting at the zeroth position work.
  previous[0] = -1;
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    sum += element;
    previous[sum] = i;
    const firstIdx = previous[sum-k];
    if (!!firstIdx) {
      return list.slice(firstIdx - 1, i);
    }
  }
  return null;
}

console.log(findContinuousK([1,2,3,4,5], 9)); // expected [2,3,4]