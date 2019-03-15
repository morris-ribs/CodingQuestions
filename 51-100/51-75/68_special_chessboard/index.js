const TOP_LEFT_TO_BOTTOM_RIGHT = 0;
const TOP_RIGHT_TO_BOTTOM_LEFT = 1;

function combos(num) {
  return (num * (num-1)) / 2;
}

function pairs(bishops, M) {
  const counts = {};
  for (let i = 0; i < bishops.length; i++) {
    const cell = bishops[i];
    const topL = { row: (cell.row - Math.min(cell.row, cell.col)), col: (cell.col - Math.min(cell.row, cell.col)), top: TOP_LEFT_TO_BOTTOM_RIGHT };
    const topR = { row: (cell.row - Math.min(cell.row, (M - cell.col))), col: (cell.col + Math.min(cell.row, (M - cell.col))), top: TOP_RIGHT_TO_BOTTOM_LEFT };
    const keyTopL = topL.row.toString() + "," + topL.col.toString() + "," + topL.top.toString();
    if (typeof(counts[keyTopL]) === "undefined") {
      counts[keyTopL] = 0;
    }
    counts[keyTopL]++;

    const keyTopR = topR.row.toString() + "," + topR.col.toString() + "," + topR.top.toString();
    if (typeof(counts[keyTopR]) === "undefined") {
      counts[keyTopR] = 0;
    }
    counts[keyTopR]++;
  }
  let total = 0;
  Object.keys(counts).map(key => {
    const count = counts[key];
    total += combos(count);
  });
  return total;
}

const bishops = [
  { row: 0, col: 0 }, { row: 1, col: 2 }, { row: 2, col: 2 }, { row: 4, col: 0 }
];

console.log(pairs(bishops, 5));