function longestIncreasingSubsequence(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  const cache = [];
  for (let i = 1; i <= arr.length; i++) {
    cache.push(1);  
  }

  for (let i = 1; i <= arr.length; i++) {    
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        cache[i] = Math.max(cache[i], cache[j] + 1);
      }
    }
  }

  return Math.max(...cache);
}

console.log(longestIncreasingSubsequence([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])); // expected 6