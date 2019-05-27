function startingConcatenations(s="", words=[]) {
  if (words.length === 0) {
    return [];
  }

  const k = words[0].length;
  const result = [];
  let i = 0;
  const counter = {};
  for (let j = 0; j < words.length; j++) {
    const word = words[j];
    if (typeof counter[word] === "undefined") {
      counter[word] = 1;
    } else {
      counter[word]++;
    }
  }
  while (i < k) {
    let i2 = i;
    for (let j = (i+k); j < (s.length + 1); j+=k) {
      const word = s.substring((j-k), j);
      if (typeof counter[word] === "undefined") {
        counter[word] = 0;
      }
      counter[word]--;

      // No possible match: restore words and move i up.
      while (counter[word] < 0) {
        const wordAux = s.substring(i2, (i2+k));        
        if (typeof counter[wordAux] === "undefined") {
          counter[wordAux] = 0;
        } 
          
        counter[wordAux]++;
        i2 += k;
      }

      // Matched all words
      if ((i2 + k * words.length) === j) {
        result.push(i2);
      }
    }
    i++;
  }

  return result;
}

console.log(startingConcatenations("dogcatcatcodecatdog", ["cat", "dog"])); // expected [0, 13]
console.log(startingConcatenations("barfoobazbitbyte", ["cat", "dog"])); // expected []