const EMPTY = 0;
const WALL = 1;

function numWays(matrix=[]) {
  const m = matrix.length;
  const n = matrix[0].length;

  const numWaysMatrix = [];
  let i = 0;
  let j = 0;
  while (i < m) {
    numWaysMatrix.push([]);
    j = 0;
    while (j < n) {
      numWaysMatrix[i].push(0);
      j++;
    }
    i++;
  }

  // Fill first row
  j = 0;
  while (j < n) {
    if (matrix[0][j] === WALL) {
      break;
    }
    numWaysMatrix[0][j] = 1;
    j++;
  }

  // Fill first col
  i = 0;
  while (i < n) {
    if (matrix[i][0] === WALL) {
      break;
    }
    numWaysMatrix[i][0] = 1;
    i++;
  }
  
  i = 1; 
  while (i < m) {
    j =1;
    while (j < n) {
      const fromTop = matrix[i-1][j] != WALL ? numWaysMatrix[i-1][j] : 0;
      const fromLeft = matrix[i][j-1] != WALL ? numWaysMatrix[i][j-1] : 0;
      numWaysMatrix[i][j] = fromTop + fromLeft;
      j++;
    }
    i++;
  }

  return numWaysMatrix[m-1][n-1];
}

const matrix = [
  [0, 0, 1],
  [0, 0, 1],
  [1, 0, 0]
];
console.log(numWays(matrix)); // expected 2