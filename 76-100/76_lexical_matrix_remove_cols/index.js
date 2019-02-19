function isSortedUpTo(board, i) {
  // Returns whether the table is sorted in lexicographic order up to column i.
  const len = board.length;  
  for (let r = 0; r < (len-1); r++) {
    for (let c = 0; c < (i+1); c++) {
      if (board[r][c] > board[r+1][(c)]) {
        return false;
      }
    }  
  }
  return true;
}

function removeCol(board, i) {
  for (let r = 0; r < board.length; r++) {
    const row = board[r];
    row.splice(i, 1);
  }
}

function badCols(board) {
  let numBadCols = 0;
  let numCols = board[0].length;
  let i = 0;
  while (i < numCols) {
    if (isSortedUpTo(board, i)) {
      i++;
      continue;
    } else {
      removeCol(board, i);
      numBadCols++;
      numCols--;
    }
  }

  return numBadCols;
}

console.log(badCols([
  ['c', 'b', 'a'],
  ['d','a','f'],
  ['g','h','i']
])); // expected 1

console.log(badCols([['a','b','c','d','e','f']])); // expected 0

console.log(badCols([
  ['z','y','x'],
  ['w','v','u'],
  ['t','s','r']
])); // expected 3