const EMPTY = 0;
function duplicates(arr) {
  const c = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (!!c[val] && val != EMPTY) {
      return true;
    }
    c[val] = true;
  }
  
  return false;
}

function blocksValid(board) {
  for (let i = 0; i < 9; i+=3) {
    for (let j = 0; j < 9; j+=3) {
      const block = [];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          block.push(board[i+k][j+l]);
        }
      }
      if (duplicates(block)) {
        return false;
      }
    }
  }
  return true;
}

function colsValid(board) {
  for (let j = 0; j < board[0].length; j++) { 
    const aux = [];
    for (let i = 0; i < board.length; i++) { 
      aux.push(board[i][j]);
    }
    if (duplicates(aux)) {
      return false;
    }
  }
  return true;
}

function rowsValid(board) {  
  for (let i = 0; i < board.length; i++) {
    if (duplicates(board[i])) {
      return false;
    }
  }
  return true;
}

function validSoFar(board) {
  if (!rowsValid(board)) {
    return false;
  }
  if (!colsValid(board)) {
    return false;
  }
  if (!blocksValid(board)) {
    return false;
  }
  return true;
}

function findFirstEmpty(board) {
  const tuple = {row: -1, col: -1};

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const val = row[j];
      if (val === EMPTY) {
        tuple.row = i;
        tuple.col = j;
        return tuple;
      }
    }
  }

  return false;
}

function isComplete(board) {  
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === EMPTY) {
        return false;
      }
    }
  }
  return true;
}

function sudoku(board) {
  if (isComplete(board)) {
    return board;
  }
  
  const tuple = findFirstEmpty(board);
  // set tuple to a val from 1 to 9
  for (let i = 1; i < 10; i++) {
    board[tuple.row][tuple.col] = i;
    if (validSoFar(board)) {
      const result = sudoku(board);
      if (isComplete(result)) {
        return result;
      }
    }
    board[tuple.row][tuple.col] = EMPTY;
  }
  return board;
}

const board = [
  [EMPTY, 6, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [4, EMPTY, 9, EMPTY, 8, 5, 2, EMPTY, 1],
  [EMPTY, EMPTY, EMPTY, 6, 9, EMPTY, 4, EMPTY, EMPTY],
  [9, EMPTY, 4, EMPTY, EMPTY, EMPTY,5, EMPTY, EMPTY],
  [5, 3, 7, 4, EMPTY, 2, 9, 1, 8],
  [EMPTY, EMPTY, 1, EMPTY, EMPTY, EMPTY, 3, EMPTY, 7],
  [EMPTY, EMPTY, 3, EMPTY, 4, 6, EMPTY, EMPTY, EMPTY],
  [7, EMPTY, 6, 9, 2, EMPTY, 8, EMPTY, 4],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, 5, EMPTY]
];

console.log(sudoku(board));

const boardHard = [
  [EMPTY, EMPTY, EMPTY, EMPTY, 4, EMPTY, EMPTY, EMPTY, 6],
  [EMPTY, EMPTY, 6, EMPTY, EMPTY, EMPTY, 1, 7, EMPTY],
  [EMPTY, 9, EMPTY, 6, 7, EMPTY, 3, 4, EMPTY],
  [EMPTY, EMPTY, 4, 2, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [7, EMPTY, 3, EMPTY, 5, EMPTY, 9, EMPTY, 2],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, 1, 4, EMPTY, EMPTY],
  [EMPTY, 4, 1, EMPTY, 6, 2, EMPTY, 8, EMPTY],
  [EMPTY, 3, 7, EMPTY, EMPTY, EMPTY, 6, EMPTY, EMPTY],
  [2, EMPTY, EMPTY, EMPTY, 1, EMPTY, EMPTY, EMPTY, EMPTY]
];

console.log(sudoku(boardHard));