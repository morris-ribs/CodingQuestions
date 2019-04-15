function collectCoins(matrix, r=0, c=0, cache=null) {
  if (cache == null) {
    cache = {};
  }

  let numRows = matrix.length;
  let numCols = matrix[0].length;

  let isBottom = (r === (numRows-1));
  let isRightMost = (c === (numCols-1));

  if (Object.keys(cache).findIndex(coord => coord.c === c && coord.r === r) < 0) {
    if (isBottom && isRightMost) {
      cache[{r: r, c: c}] = matrix[r][c];
    } else if (isBottom) {
      cache[{r: r, c: c}] = matrix[r][c] + collectCoins(matrix, r, c+1, cache);      
    } else if (isRightMost) {
      cache[{r: r, c: c}] = matrix[r][c] + collectCoins(matrix, r+1, c, cache);      
    } else {
      cache[{r: r, c: c}] = matrix[r][c] + Math.max(collectCoins(matrix, r, c+1, cache), collectCoins(matrix, r+1, c, cache));      
    }
  }

  return cache[{r,c}];
}

console.log(collectCoins([[0, 3, 1, 1],[2, 0, 0, 4],[1, 5, 3, 1]])); // expected 12
