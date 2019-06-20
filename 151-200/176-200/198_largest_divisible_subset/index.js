/*
  The brute force solution would generate all subsets of numbers and, for each one, compare all pairs of numbers to check divisibility.

  Since there are 2N subsets of any set, and looking at all pairs of each subset is O(N2), this would take O(2N * N2). We must find a better solution.

  Note that, for any number a and b, if a | b, then every element that divides a will also divide b. So if we have a sorted list, knowing how many divisors each element has before k will also tell us how many divisors the kth element has- just one more than that of its greatest divisor. Therefore, we can use dynamic programming to find the largest subset that includes a given number by looking at the sizes of previously computed subsets.

  To make this more concrete, suppose we are using the list [5, 10].

  Now we look at the second element. Since 5 | 10, and 5 had one divisor, num_divisors[1] = num_divisors[0] + 1 = 2.

  Finally, for each element in the solution subset, we store the index where we can find the next highest element in the subset. In other words, if a < b < c, then prevDivisorIndex[c] would be the index of b, and prevDivisorIndex[b] would be the index of a.
*/
function compareNumbers(a,b) {
  return a-b;
}

function largestDivisibleSubset(nums=[]) {
  if (nums == null || nums.length === 0) {
    return nums;
  }

  nums = nums.sort(compareNumbers);
  
  // Keep track of the number of divisors of each element, and where to find
  //   its last divisor.
  const numDivisors = [];
  const prevDivisorIndex = [];
  for (let i = 0; i < nums.length; i++) {
    numDivisors.push(1);
    prevDivisorIndex.push(-1);
  }

  // Also track the index of the last element in the best subset solution so far.
  let maxIndex = 0;

  // For each element, check if a previous element divides it. If so, and if adding
  //   the element will result in a larger subset, update its number of divisors
  //   and where to find its last divisor.
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if ((nums[i] % nums[j] == 0) && (numDivisors[i] < numDivisors[j] + 1)) {
        numDivisors[i] = numDivisors[j] + 1;
        prevDivisorIndex[i] = j;        
      }
    }
    if (numDivisors[maxIndex] < numDivisors[i]) {
      maxIndex = i;
    }
  }

  // Finally, go back through the chain of divisors and get all the subset elements.
  const result = [];
  let i = maxIndex;
  while (i >= 0) {
    result.push(nums[i]);
    i = prevDivisorIndex[i];
  }
  return result.sort(compareNumbers);
}

console.log(largestDivisibleSubset([3, 5, 10, 20, 21])); // expected [5, 10, 20]
console.log(largestDivisibleSubset([1, 3, 6, 24])); // expected [1, 3, 6, 24]