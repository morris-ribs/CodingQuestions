function isValid(board) {
  const currentQueenRow = (board.length - 1);
  const currentQueenCol = board[currentQueenRow];

  for (let row = 0; row < (currentQueenRow -1); row++) {
    const col = board[row];
    const diff = Math.abs(currentQueenCol - col);
    if (diff === 0 || diff === (currentQueenRow - row)) {
      return false;
    }
  }

  return true;
}

function nQueens(n, board = []) {
  if (n === board.length) {
    return 1;
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    board.push(i);

    if (isValid(board)) {
      count += nQueens(n, board);
    }

    board.pop();
  }
  return count;
}

console.log(nQueens(9));