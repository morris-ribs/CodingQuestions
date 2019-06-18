function buyAndSellWithFee(arr=[], fee=0) {
  let currentMaxProfit = 0;
  let hold = -arr[0];
  for (let i = 1; i < arr.length; i++) {
    const price = arr[i];
    currentMaxProfit = Math.max(currentMaxProfit, hold + price - fee);
    hold = Math.max(hold, currentMaxProfit - price);
  }
  return currentMaxProfit;
}

console.log(buyAndSellWithFee([1, 3, 2, 8, 4, 10], 2)); // expected 9