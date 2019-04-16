function maxProfit(K, prices=[]) {
  let N = prices.length;
  const dp = [];
  for (let i = 0; i < (K+1); i++) {
    dp.push([]);
    
    for (let j = 0; j < N; j++) {
      dp[i].push(0);
    }
  }

  for (let i = 0; i < K+1; i++) {
    dp[i][0] = 0;
  }

  for (let j = 0; j < N; j++) {
    dp[0][j] = 0;
  }

  for (let i = 1; i < (K+1); i++){
    let bestSoFar = -Infinity;
    for (let j = 1; j < N; j++) {
      bestSoFar = Math.max(bestSoFar, dp[i-1][j-1] - prices[j-1]);
      dp[i][j] = Math.max(dp[i][j-1], prices[j] + bestSoFar);
    } 
  }

  return dp[K][N-1];
}

console.log(maxProfit(2, [5, 2, 4, 0, 1])); // expected 3