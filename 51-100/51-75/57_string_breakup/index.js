function len(words = []) {
  if (words.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    sum += word.length;
  }
  return sum + words.length - 1;
}

function breakUp(str, k) {
  const words = str.split(" ");

  if (words.length === 0) {
    return [];
  }

  let current = "";
  const all = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if ((current.length + word.length + 1) <= k) {
      current = current + ((current.length > 0) ? " " : "") + word;
    } else if (word.length > k) {
      return null;
    } else {
      all.push(current);
      current = word;
    }
  }

  all.push(current);
  return all;
}

console.log(breakUp("the quick brown fox jumps over the lazy dog", 10)); // expected ["the quick", "brown fox", "jumps over", "the lazy", "dog"]