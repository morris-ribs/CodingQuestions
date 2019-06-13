function subarraySum(arr=[], func) {
  let endingHere = 0;
  let soFar = 0;

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    endingHere = func(x, endingHere + x);
    soFar = func(soFar, endingHere);
  }
  return soFar;
}

function maxCircularSubarray(arr=[]) {
  const sum = (nums=[]) => {
    let s = 0;
    for (let index = 0; index < nums.length; index++) {
      const num = nums[index];
      s += num;
    }
    return s;
  };
  const maxSubarraySumWraparound = sum(arr) - subarraySum(arr, Math.min);
  return Math.max(subarraySum(arr, Math.max), maxSubarraySumWraparound);
}

console.log(maxCircularSubarray([8, -1, 3, 4])); // expected 15