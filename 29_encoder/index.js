function decode(str) {
  if (str === "") {
    return "";
  }
  const substr = str.substring(0, 2);
  let decodedStr = "";
  const limit = parseInt(substr[0]);
  for (let index = 0; index < limit; index++) {
    decodedStr += substr[1];    
  }
  return decodedStr + decode(str.substring(2));
}

function encode(str, result = "") {
  if (str === "") {
    return result;
  }

  const currentChar = str[0];
  const resultLength = result.length;
  if (resultLength === 0 || result[resultLength-1] !== currentChar) {
    result += "1" + currentChar;
  } else {
    let count = parseInt(result[resultLength-2]);
    count++;
    const newSubStr = count + currentChar;
    result = result.substring(0, resultLength-2) + newSubStr;
  }

  return encode(str.substring(1), result);
}

console.log(encode("AAAABBBCCDAA")); // expected 4A3B2C1D2A
console.log(decode("4A3B2C1D2A")); // expected AAAABBBCCDAA