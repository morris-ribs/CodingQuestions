function calculate(minValue, nbOfWalls, diffIndexes) {
  return (minValue * (diffIndexes - 1)) - nbOfWalls;
}

function countWaterUnits(arr) {
  let count = 0;
  const limit = arr.length;
  if (limit > 2) {
    let indexLeft = 0, indexRight = 1, nbOfIntermediateWalls = 0;

    for (let index = 2; index < limit; index++) {
      const element = arr[index];
      if (element > arr[indexRight]) {
        nbOfIntermediateWalls += arr[indexRight];
        indexRight = index;
      }

      if (element >= arr[indexLeft]) {
        if (index > (indexLeft + 1)) {
          // calculate nb of units between left and element, and add it to count
          count += calculate(Math.min(arr[indexLeft], element), nbOfIntermediateWalls, (index - indexLeft));
        }
        indexLeft = index;
        indexRight = index + 1;
        nbOfIntermediateWalls = 0;
      } 
    }

    if (indexRight > (indexLeft + 1)) {
      // calculate nb of units between left and element, and increment count
      count += calculate(Math.min(arr[indexLeft], arr[indexRight]), nbOfIntermediateWalls, (indexRight - indexLeft));
    }
  }
  return count;
}

console.log(countWaterUnits([2, 1, 2])); // expected 1
console.log(countWaterUnits([3, 0, 1, 3, 0, 5])); // expected 8
console.log(countWaterUnits([2, 1, 1])); // expected 0
console.log(countWaterUnits([2, 3, 1, 1])); // expected 0
console.log(countWaterUnits([1, 0, 3, 3, 0, 5])); // expected 4
