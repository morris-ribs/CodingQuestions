function merge(leftLst, rightLst) {
  const result = [];

  let i= 0, j = 0;
  while (i < leftLst.length && j < rightLst.length) {
    if (leftLst[i] < rightLst[j]) {
      result.push(leftLst[i++]);
    } else if (leftLst[i] > rightLst[j]) {
      result.push(rightLst[j++]);
    } else {
      result.push(leftLst[i++]);
      result.push(rightLst[j++]);
    }
  }

  result.push(...leftLst.slice(i, leftLst.length));
  result.push(...rightLst.slice(j, rightLst.length));
  return result;
}

function squareSort(lst) {
  const negatives = [];
  lst.forEach(x => {
    if (x < 0) {
      negatives.push(x);
    }
  });
  const nonNegatives = [];
  lst.forEach(x => {
    if (x >= 0) {
      nonNegatives.push(x);
    }
  });

  const negativesSquareSorted = [];
  for (let i = (negatives.length-1); i >= 0; i--) {
    const x = negatives[i];
    negativesSquareSorted.push(Math.pow(x, 2));
  }

  const nonNegativesSquareSorted = nonNegatives.map(x => Math.pow(x, 2));
  return merge(negativesSquareSorted, nonNegativesSquareSorted);
}

console.log(squareSort([-9, -2, 0, 2, 3])); // expected [0, 4, 4, 9, 81]