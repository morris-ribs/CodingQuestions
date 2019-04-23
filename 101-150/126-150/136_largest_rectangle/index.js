function isValid(matrix, topLeftRow, topLeftCol, bottomRightRow, bottomRightCol) {
  for (let i = topLeftRow; i < bottomRightRow; i++) {
    for (let j = topLeftCol; j < bottomRightCol; j++) {
      if (matrix[i][j] === 0) {
        return false;
      }
    }
  }

  return true;
}

function area(topLeftRow, topLeftCol, bottomRightRow, bottomRightCol) {
  return (bottomRightRow - topLeftRow) * (bottomRightCol - topLeftCol);
}

function largestRectangle(matrix) {
  const N = matrix.length;
  const M = matrix[0].length;

  let maxSoFar = 0;
  for (let topLeftRow = 0; topLeftRow < N; topLeftRow++) {
    for (let topLeftCol = 0; topLeftCol < M; topLeftCol++) {
      for (let bottomRightRow = N; bottomRightRow > topLeftRow; bottomRightRow--) {
        for (let bottomRightCol = M; bottomRightCol > topLeftCol; bottomRightCol--) {
          if (isValid(matrix, topLeftRow, topLeftCol, bottomRightRow, bottomRightCol)) {
            maxSoFar = Math.max(maxSoFar, area(topLeftRow, topLeftCol, bottomRightRow, bottomRightCol));
          }
        }       
      }     
    }   
  }

  return maxSoFar;
}

console.log(largestRectangle(
  [
    [1, 0, 0, 0],
    [1, 0, 1, 1],
    [1, 0, 1, 1],
    [0, 1, 0, 0]
  ]
)); // expected 4