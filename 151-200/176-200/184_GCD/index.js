function _gcd(a, b) {
  while (b !== 0) {
    a = b;
    b = a % b;
  }

  return a;
}

function gcd(nums=[]) {
  let n = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    n = _gcd(n, num);
  }

  return n;
}

console.log(gcd([42, 56, 14])); // expected 14