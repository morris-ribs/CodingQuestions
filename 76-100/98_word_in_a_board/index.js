function search(board, row, col, word, index, visited) {
  const isValid = (board, row, col) => {
    return row >= 0 && row < board.length && col >= 0 && col < board[0].length;
  };

  if (!isValid(board, row, col)) {
    return false;
  }

  if (visited.findIndex(v=> v.row === row && v.col === col) >= 0) {
    return false;
  }

  if (board[row][col] !== word[index]) {
    return false;
  }

  if (index === (word.length-1)) {
    return true;
  }

  visited.push({row: row, col: col});

  const aux = [{row: 0, col: -1}, {row: 0, col: 1}, {row: -1, col: 0}, {row: 1, col: 0}];
  for (let i = 0; i < aux.length; i++) {
    const d = aux[i];
    if (search(board, row + d.row, col + d.col, word, index + 1, visited)) {
      return true;
    }
  }

  visited.splice(visited.length-1, 1);  // Backtrack
  return false;
}

function findWord(board, word) {
  const M = board.length;
  const N = board[0].length;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      const visited = [];
      if (search(board, i, j, word, 0, visited)) {
        return true;
      }
    }
  }
  return false;
}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

console.log(findWord(board, "ABCCED"));
console.log(findWord(board, "SEE"));
console.log(findWord(board, "ABCB"));
