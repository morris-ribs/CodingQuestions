/**
 * We can build a 2D table. 
 * We'll store, in each index, the shortest palindrome that can be made in the substring defined from i to i + j. 
 * Then we'll just look up the values in our table for the palindrome
 * 
 * Because we store a part of our input string in each index of our matrix, the time and space complexity for this solution is O(N^3).
 */


function makePalindrome(str) {
  const length = str.length;
  if (length <= 1) {
    return str;
  }
  table = [];
  for (let i = 0; i <= length; i++) {
    table[i] = [];
    for (let j = 0; j <= length; j++) {    
      table[i][j] = "";
    }
  }

  for (let i = 0; i < length; i++) {
    table[i][1] = str[i];    
  }

  for (let j = 2; j <= length; j++){
    for (let i = 0; i <= (length-j); i++) {
      const term = str.substring(i, (i+j));
      const first = term[0];
      const last = term[term.length-1];

      if (first === last) {
        table[i][j] = first + table[i+1][j-2] + last;
      } else {
        const one = first + table[i+1][j-1] + first;
        const two = last + table[i][j-1] + last;

        if (one.length < two.length) {
          table[i][j] = one;
        } else if (one.length > two.length) {
          table[i][j] = two;
        } else {
          table[i][j] = (one.localeCompare(two) <= 0) ? one : two;
        }
      }
    }  
  }

  const elem = table[0];
  return elem[elem.length-1];
}

console.log(makePalindrome("race"));
console.log(makePalindrome("google"));
console.log(makePalindrome("abra"));
console.log(makePalindrome("abracadabra"));