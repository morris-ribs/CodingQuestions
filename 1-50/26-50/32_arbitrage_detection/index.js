function detectArbitrage(mat) {
  for (let i = 0; i < mat.length; i++) {
    const exchangeRate = mat[i];
    for (let j = 0; j < exchangeRate.length; j++) {
      if (j !== i) {
        for (let k = j+1; k < exchangeRate.length; k++) {
          if (k !== i) {
            const invested = exchangeRate[j] * mat[j][k] * mat[k][i];
            if (invested > 1) {
              return true;
            }
          }
        }
      }  
    }
  }

  return false;
}

const mat = [
  [1, 1.119, 0.784],
  [0.894, 1, 0.698],
  [1.276, 1.432, 1]
];

console.log(detectArbitrage(mat));