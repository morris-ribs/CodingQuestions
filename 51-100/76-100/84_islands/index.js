function isInsideBoard(board, row, col) {
  return 0 <= row && row < board.length && 0 <= col && col < board[0].length;
}

function fill(board, visited, row, col) {
  const moves = [{ r: 0, c: 1 }, { r: 0, c: -1}, { r: 1, c: 0 }, { r: -1, c: 0 }];
  visited[row][col] = true;
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    const newMove = { r: move.r + row, c: move.c + col };
    if (isInsideBoard(board, newMove.r, newMove.c) && board[newMove.r][newMove.c] === 1 && !visited[newMove.r][newMove.c]) {
      fill(board, visited, newMove.r, newMove.c);
    }
  }
}

function numIslands(board) {
  const numRows = board.length;
  const numCols = board[0].length;
  
  let count = 0;
  const visited = [];
  for (let r = 0; r < numRows; r++) {
    visited.push([]);
    for (let c = 0; c < numCols; c++) {
      visited[r].push(false);    
    }
  }

  for (let r = 0; r < numRows; r++) {
    const row = board[r];
    for (let c = 0; c < row.length; c++) {
      const cell = row[c];
      if (cell === 1 && !visited[r][c]) {
        fill(board, visited, r, c);
        count++;
      }
    }
  }

  return count;
}

console.log(numIslands(
  [[1, 0, 0, 0, 0], 
  [0, 0, 1, 1, 0], 
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [1, 1, 0, 0, 1]]
)); // expected 4