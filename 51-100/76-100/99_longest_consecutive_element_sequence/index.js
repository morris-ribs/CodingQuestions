function longestConsecutive(nums = []) {
  let maxLen = 0;
  const bounds = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (typeof bounds[num] !== "undefined") {
      continue;
    }
    let leftBound =  num;
    let rightBound = num;
    if (typeof bounds[num-1] !== "undefined") {
      leftBound =  bounds[num-1]["left"];
    }
    if (typeof bounds[num+1] !== "undefined") {
      rightBound =  bounds[num+1]["right"];
    }
    const obj = { left: leftBound, right: rightBound };
    bounds[num] = obj;
    bounds[leftBound] = obj;
    bounds[rightBound] = obj;
    maxLen = Math.max(rightBound - leftBound + 1, maxLen);
  }

  return maxLen;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // expected 4