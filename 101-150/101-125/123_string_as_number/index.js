function isPositiveInteger(s) {
  return s!== "" && !isNaN(s);
}

function isNegativeInteger(s) {
  return s[0] === '-' && isPositiveInteger(s.substring(1));
}

function countChars(s, charToFind) {
  const result = [];
  s.split('').map(c => { 
    if (c === charToFind) {
      result.push(c);
    }
  });
  return result.length;
}

function isPositiveReal(s) {
  if (countChars(s, ".") !== 1) {
    return false;
  }

  const integerPart = s.split(".")[0];
  const decimalPart = s.split(".")[1];

  return(isPositiveInteger(integerPart) && isPositiveInteger(decimalPart));
}

function isNegativeReal(s) {
  return s[0] === '-' && isPositiveReal(s.substring(1));
}

function isPositiveNumber(s) {
  return isPositiveInteger(s) || isPositiveReal(s);
}

function isNegativeNumber(s) {  
  return s[0] === '-' && isPositiveNumber(s.substring(1));
}

function isScientificNumber(s) {
  if (countChars(s, "e") !== 1) {
    return false;  
  }

  const beforeE = s.split("e")[0];
  const afterE = s.split("e")[1];

  return ((isPositiveNumber(beforeE) || isNegativeNumber(beforeE)) && 
    (isPositiveNumber(afterE) || isNegativeNumber(afterE)));
}

function isNumber(s) {
  return isPositiveNumber(s) || isNegativeNumber(s) || isScientificNumber(s);
}

// expected true
console.log(isNumber("10"));
console.log(isNumber("-10"));
console.log(isNumber("10.1"));
console.log(isNumber("-10.1"));
console.log(isNumber("1e5"));

// expected false
console.log(isNumber("a"));
console.log(isNumber("x 1"));
console.log(isNumber("a -2"));
console.log(isNumber("-"));