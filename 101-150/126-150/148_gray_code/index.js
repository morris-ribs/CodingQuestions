function grayCode(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0, 1];    
  }
  let prevGrayCode = grayCode(n -1);

  const result = [];
  for (let i = 0; i < prevGrayCode.length; i++) {
    const code = prevGrayCode[i];
    result.push(code);
  }

  for (let i = (prevGrayCode.length-1); i >= 0; i--) {
    const code = prevGrayCode[i];
    result.push((1 << n - 1) + code);
  }

  return result;
}

console.log(grayCode(2)); // expected [0, 1, 3, 2] => [00, 01, 11, 10]