function nextPermutation(nums = []) {
  const swap = (nums, a, b) => {
    // Perform an in-place swap
    const aux = nums[a];
    nums[a] = nums[b];
    nums[b] = aux;
    return nums;
  };

  const reverse = (nums, a, b) => {
    // Reverses elements at index a to b (inclusive) in-place
    let j = 0;
    for (let i = a; i < b; i++) {      
      const aux = nums[i];
      nums[i] = nums[b-j];
      nums[b-j] = aux;
      j++;
    }
    return nums;
  };

  // Find first index where nums[idx] < nums[idx + 1]
  let pivot = nums.length - 2;
  while (pivot >= 0 && nums[pivot] >= nums[pivot + 1]) {
    pivot--;
  }

  if (pivot >= 0) {
    // Find the next-largest number to swap with
    let successor = nums.length - 1;
    while (successor > 0 && nums[successor] <= nums[pivot]) {
      successor--;
    }
    nums = swap(nums, pivot, successor);
  }
  const result = reverse(nums, pivot+1, nums.length - 1);
  return result;
}

console.log(nextPermutation([1,2,3])); // expected [1,3,2]
console.log(nextPermutation([1,3,2])); // expected [2,1,3]
console.log(nextPermutation([3,2,1])); // expected [1,2,3]