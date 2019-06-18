function matrixCountEdge(matrix=[], i1, j1, i2, j2) {
  const M = matrix.length;
  const N = matrix[0].length;

  let count = 0;
  let i = 0;
  // Count numbers smaller than matrix[i1][j1]
  const a = matrix[i1][j1];
  for (let j = N-1; j >= 0; j--) {
    while (i < M && matrix[i][j] < a) {
      i++;
    }
    count+=i;
  }

  // Count numbers greater than matrix[i2][j2]
  b = matrix[i2][j2];
  i = 0;
  for (let j = N-1; j >= 0; j--) {  
    while (i < M && matrix[i][j] < b) {
      i++;
    }
    count += (M-i);
  }
  return count;
}

const matrix = [
  [1, 3, 7, 10, 15, 20],
  [2, 6, 9, 14, 22, 25],
  [3, 8, 10, 15, 25, 30],
  [10, 11, 12, 23, 30, 35],
  [20, 25, 30, 35, 40, 45]
];
const i1 = 1, j1 = 1, i2 = 3, j2 = 3;
console.log(matrixCountEdge(matrix, i1, j1, i2, j2)); // expected 15