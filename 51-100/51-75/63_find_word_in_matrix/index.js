function buildWordRight(matrix, r, c, length) {
  let word = "";
  for (let i = c; i < matrix[0].length; i++) {
    word += matrix[r][i];
  }

  return word.substring(0, length);
}

function buildWordDown(matrix, r, c, length) {
  let word = "";
  for (let i = r; i < matrix.length; i++) {
    word += matrix[i][c];
  }

  return word.substring(0, length);
}

function wordSearch(matrix, word) {
  const row = matrix[0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < row.length; j++) {
      const wordRight = buildWordRight(matrix, i, j, word.length);
      const wordDown = buildWordDown(matrix, i, j, word.length);
      if (wordRight === word || wordDown === word) {
        return true;
      }
    }
  }

  return false;
}

// expected true
console.log(wordSearch([['F', 'A', 'C', 'I'],
                        ['O', 'B', 'Q', 'P'],
                        ['A', 'N', 'O', 'B'],
                        ['M', 'A', 'S', 'S']], "FOAM"));