function reverseString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(word="") {
  return word === reverseString(word);
}

function palindromePairs(words=[]) {
  const d = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    d[word] = i;
  }

  const result = [];
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      const prefix = word.slice(0, j);
      const postfix = word.slice(j);
      const reversedPrefix = reverseString(prefix);
      const reversedPostfix = reverseString(postfix);

      if (isPalindrome(postfix) && typeof d[reversedPrefix] !== "undefined") {
        if (i !== d[reversedPrefix]) {
          result.push({ i1: i, i2: d[reversedPrefix] });
        }
      }

      if (isPalindrome(prefix) && typeof d[reversedPostfix] !== "undefined") {
        if (i !== d[reversedPostfix]) {
          result.push({ i1: i, i2: d[reversedPostfix] });
        }
      }      
    }
  }

  return result;
}

console.log(palindromePairs(["code", "edoc", "da", "d"]));