/*
If you have 100 fair coins, then you'd expect to get 50 heads after the first round, and then 25, and so on. We can get the number of rounds it takes to get to 1 remaining coin by simply halving until we reach one.

That's simply log2(n)
 */

function coins(N) {
  return Math.log2(N);
}

console.log(coins(100));