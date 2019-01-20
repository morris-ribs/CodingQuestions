function buyAndSell(arr) {
  let currentMax = 0;
  let maxProfit = 0;
  for (let i = (arr.length - 1); i >= 0; i--) {
    const price = arr[i];
    currentMax = Math.max(currentMax, price);
    const potentialProfit = (currentMax - price);
    maxProfit = Math.max(maxProfit, potentialProfit)
  }
  return maxProfit;
}

console.log(buyAndSell([9, 11, 8, 5, 7, 10]));