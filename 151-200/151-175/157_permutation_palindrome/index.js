function isPermutationPalindrome(s="") {
  // There are 128 ASCII characters
  const arr = [];
  let i = 0;
  while (i < 128) {
    arr.push(0);
    i++;
  }

  let numOdds = 0;
  for (let j = 0; j < s.length; j++) {
    i = s.charCodeAt(j);
    arr[i]++;

    if ((arr[i] % 2) != 0) {
      numOdds++;
    } else {
      numOdds--;
    }
  }

  return (numOdds <= 1);
}

console.log(isPermutationPalindrome("carrace")); // return true
console.log(isPermutationPalindrome("daily")); // return false
