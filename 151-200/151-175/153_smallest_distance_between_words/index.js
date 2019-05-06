function minDistance(text="", word0="", word1="") {
  const textWords = [];
  const arr = text.split(" ");
  for (let i = 0; i < arr.length; i++) {
    const w = arr[i];
    textWords.push(w.trim());
  }
  console.log(textWords);
  const word0Indices = [];
  const word1Indices = [];
  for (let i = 0; i < textWords.length; i++) {
    const w = textWords[i];
    if (w === word0) {
      word0Indices.push(i);  
    } else if (w === word1) {
      word1Indices.push(i);  
    }
  }

  if (word0Indices.length === 0 || word1Indices.length === 0) { // one of the words doesn't exist.
    return Infinity;
  }

  let i = 0; let j = 0;  
  let minDistance = Math.abs(word0Indices[i] - word1Indices[j]);
  while (i < word0Indices.length && j < word1Indices.length) {
    const currentDistance = Math.abs(word0Indices[i] - word1Indices[j]);
    minDistance = Math.min(minDistance, currentDistance);
    if (word0Indices[i] < word1Indices[j]) {
      i++;
    } else {
      j++;
    }
  }

  return (minDistance - 1); // Don't count the last step to get to word1
}

console.log(minDistance("dog cat hello cat dog dog hello cat world", "hello", "world")); // expected 1