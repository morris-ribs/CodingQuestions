function distinctSubarray(arr=[]) {
  const d = {}; // most recent occurrences of each element

  let result = 0;
  let longestDistinctSubarrayStartIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (typeof d[e] !== "undefined") {
      // If d[e] appears in the middle of the current longest distinct subarray
      if (d[e] >= longestDistinctSubarrayStartIndex) {
        result = Math.max(result, i - longestDistinctSubarrayStartIndex);
        longestDistinctSubarrayStartIndex = d[e] + 1;
      }
    }
    d[e] = i;
  }

  return Math.max(result, arr.length - longestDistinctSubarrayStartIndex);
}

console.log(distinctSubarray([5, 1, 3, 5, 2, 3, 4, 1])); // expected 5