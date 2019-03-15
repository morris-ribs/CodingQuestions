function permute(nums = []) {
  const helper = (nums, index, output) => {
    if (index === (nums.length - 1)) {
      output.push(nums.slice());
    }

    for (let i = index; i < nums.length; i++) {
      let aux = nums[i];
      nums[i] = nums[index];
      nums[index] = aux;
      helper(nums, index+1, output);
      aux = nums[i];
      nums[i] = nums[index];
      nums[index] = aux;
    }
  };
  const output = [];
  helper(nums, 0, output);
  return output;
}

console.log(permute([1,2,3])); // expected [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]