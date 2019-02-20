function subsetSum(nums = [], k) {
  // We can construct a table A that's size len(nums) + 1 by k + 1. At each index A[i][j], we'll keep a subset of the list from 0..i (including lower, excluding upper bound) that can add up to j, or null if no list can be made. 
  // Then we will fill up the table using pre-computed values and once we're done, we should be able to just return the value at A[A.length-1][A[A.length-1].length-1]. 
  // Let's first initialize the list:
  const A = [];
  for (let i = 0; i < (nums.length + 1); i++) {
    A.push([]);
    for (let j = 0; j < (k+1); j++) {
      A[i].push(null);  
    }  
  }

  // To begin, we can initialize each element of the first row (A[i][0] for i in range(len(nums) + 1)) with the empty list,
  //   since any subset of the list can make 0: just don't pick anything!
  for (let i = 0; i < (nums.length+1); i++) {    
    A[i][0] = [];    
  }

  // Each element of the first column (A[0][j]) starting from the first row should be null, since we can't make anything other than 0 with the empty set. 
  // Since we've initialized our whole table to be null, then we don't need to do anything here.

  /*[], [], [], [], [], ...
    null, null, null, ...
    null, null, null, ...
    null, null, null, ...
    ... */

  // Now we can start populating the table. Iterating over each row starting at 1, and then each column starting at 1, we can use the following formula to compute A[i][j]:
  for (let i = 1; i < (nums.length + 1); i++) {
    for (let j = 1; j < (k+1); j++) {
      // First, let's consider the last element of the list we're looking at: nums[i - 1]. Let's call this "last".
      const last = nums[i-1];
      if (last > j) {
        // If last is greater than j, then we definitely can't make j with nums[:i] including last (since it would obviously go over). 
        // So let's just copy over whatever we had from A[i - 1][j]. 
        // If we can make j without last, then we can still make j. 
        // If we can't, then we still can't.
        A[i][j] = A[i-1][j];
      } else {
        // If last smaller than or equal to j, then we still might be able to make j using last
        if (A[i-1][j] != null) {
          // If we can make j without last by looking up the value at A[i - 1][j] and if it's not null, then use that
          A[i][j] = A[i - 1][j];
        } else {
          // Else, if we can't make j without last, check if we can make it with last by looking up the value at A[i - 1][j - last]. 
            
          if (A[i - 1][j - last] != null) {
            // If we can, then copy over the list from there and append the last element to it.
            A[i][j] = A[i - 1][j - last].concat([last]);
          } else {
            // Else, we can't make it with or without j, so set A[i][j] to null
            A[i][j] = null;
          }
        }
      }
    }    
  }

  const lastElementArr = A[A.length - 1];
  return lastElementArr[lastElementArr.length-1];
}

console.log(subsetSum([12, 1, 61, 5, 9, 2], 24));