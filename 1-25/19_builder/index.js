function builder(mat) {
  let lowestCost = 0;
  let lowestCostIndex = -1;
  let secondLowestCost = 0;

  for(let r = 0; r < mat.length; r++) {
    let newLowestCost = 99999998;
    let newLowestCostIndex = 99999998;
    let newSecondLowestCost = 99999999;
    const row = mat[r];
    for (let c = 0; c < row.length; c++) {
      const val = row[c];
      let prevLowestCost;
      prevLowestCost = (c === lowestCostIndex) ? secondLowestCost : lowestCost;
      const cost = prevLowestCost + val;
      if (cost < newLowestCost) {
        newSecondLowestCost = newLowestCost;
        newLowestCost = cost;
        newLowestCostIndex = c;
      } else if (cost < newSecondLowestCost) {
        newSecondLowestCost = cost;
      }
    }

    lowestCost = newLowestCost;
    lowestCostIndex = newLowestCostIndex;
    secondLowestCost = newSecondLowestCost;
  }

  return lowestCost;
}

let mat = [[7,11,43,5,2], [99,6,413,3,5], [4,105,2,1,66], [213,1,51,10]];
console.log(builder(mat));
