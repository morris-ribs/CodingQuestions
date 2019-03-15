function isValidMove(board, move, n) {
  return ((0 <= move.row && move.row < n) && (0 <= move.col && move.col < n) && (board[move.row][move.col] == null));
}

function validMoves(board, r, c, n) {
  const deltas = [
    { row: 2, col: 1 },
    { row: 1, col: 2 },
    { row: 1, col: -2 },
    { row: -2, col: 1 },
    { row: -1, col: 2 },
    { row: 2, col: -1 },
    { row: -1, col: -2 },
    { row: -2, col: -1 }
  ];

  const allMoves = deltas.map(move => { return { row: r + move.row, col: c + move.col }; });
  const result = [];
  for (let i = 0; i < allMoves.length; i++) {
    const move = allMoves[i];
    if (isValidMove(board, move, n)) {
      result.push(move);
    }
  }
  return result;
}

function knightsToursHelper(board, tour, n) {
  if (tour.length === (n*n)) {
    return 1;
  }

  let count = 0;
  const lastMove = tour[tour.length-1];
  const allValidMoves = validMoves(board, lastMove.row, lastMove.col, n);
  for (let i = 0; i < allValidMoves.length; i++) {
    const validMove = allValidMoves[i];
    tour.push({ row: validMove.row, col: validMove.col });
    board[validMove.row][validMove.col] = tour.length;
    count += knightsToursHelper(board, tour, n);
    tour.pop();
    board[validMove.row][validMove.col] = null;
  }
  return count;
}

function initializeBoard(n) {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(null);
    }
  }
  return board;
}

function knightsTours(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const board = initializeBoard(n);
      board[i][j] = 0;
      count += knightsToursHelper(board, [{ row: i, col: j }], n);
    }
  }
  return count;
}

console.log(knightsTours(4));