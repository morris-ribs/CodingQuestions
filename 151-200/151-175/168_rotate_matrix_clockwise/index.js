function rotateMatrix(matrix=[]) {
  const n = matrix.length;
  const halfOfN = Math.floor(n/2);
  
  let i = 0;
  while (i < halfOfN) {
    let j = i;
    while (j < (n-i-1)) {
      const p1 = matrix[i][j];
      const p2 = matrix[j][n-i-1];
      const p3 = matrix[n-i-1][n-j-1];
      const p4 = matrix[n-j-1][i];

      matrix[j][n-i-1] = p1;
      matrix[n - i - 1][n - j - 1] = p2;
      matrix[n - j - 1][i] = p3;
      matrix[i][j] = p4;
      j++;
    }
    i++;
  }
  return matrix;
}

console.log(rotateMatrix(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
)); 
// expected 
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]