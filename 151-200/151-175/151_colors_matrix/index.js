/*
A simplistic strategy to floodfill is to use depth-first-search. The algorithm works as follows:

First, Fill the current coord to color. Mark as visited. 
For each neighboring newCoord, if it hasn't been visited, is inside the matrix, and is the same color as current coord color, recursively floodfill that coordinate.
*/

function inMatrix(matrix, coord) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const r = coord.row;
  const c = coord.col;

  return 0 <= r && r < rows && 0 <= c  && c < cols;  
}

function floodFill(matrix, coord, color, visited=null) {
  if (visited == null) {
    visited = [];
  }

  visited.push(coord);

  const r = coord.row;
  const c = coord.col;
  const priorColor = matrix[r][c];
  matrix[r][c] = color;

  const coords = [{ row: (r + 1), col: c }, { row: r, col: (c + 1) }, { row: (r - 1), col: c }, { row: r, col: (c - 1) }];

  for (let i = 0; i < coords.length; i++) {
    const newCoord = coords[i];
    const newR = newCoord.row;
    const newC = newCoord.col;
    if (visited.findIndex(coord => newCoord.row === coord.row && coord.col === newCoord.col) < 0
        && inMatrix(matrix, newCoord)
        && matrix[newR][newC] === priorColor) {

        visited.push(newCoord);
        floodFill(matrix, newCoord, color, visited);
    }
  }

  return matrix;
}

console.log(floodFill(
  [
    ['B', 'B', 'W'],
    ['W', 'W', 'W'],
    ['W', 'W', 'W'],
    ['B', 'B', 'B']
  ],
  { row: 2, col: 2 },
  'G'
)); 
/* expected 
[ 
  [ 'B', 'B', 'G' ],
  [ 'G', 'G', 'G' ],
  [ 'G', 'G', 'G' ],
  [ 'B', 'B', 'B' ] 
] 
*/