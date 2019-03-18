function smallest(s1="", s2) {
  if (s2 === "") {
    return null;
  }

  const d = {};
  const nNeg = [0]; // number of negative entries in d
  const incr = (c) => {
    if (typeof d[c] === "undefined") {
      d[c] = 0;
    } 
    d[c]++;
    if (d[c] === 0) {
      nNeg[0]--;
    }
  };
  const decr = (c) => {
    if (typeof d[c] === "undefined") {
      d[c] = 0;
    }
    if (d[c] === 0) {
      nNeg[0]++;
    }
    d[c]--;    
  };

  for (let i = 0; i < s2.length; i++) {
    const c = s2[i];
    decr(c);
  }

  let minLen = s1.length + 1;
  let j = 0;

  for (let i = 0; i < s1.length; i++) {
    while (nNeg[0] > 0) {
      if (j >= s1.length) {
        return minLen;
      }
      incr(s1[j]);
      j++;
    }
    minLen = Math.min(minLen, j - i);
    const c = s1[i];
    decr(c);
  }

  return minLen;
}

console.log(smallest("figehaeci", ['a', 'e', 'i'])); // expected "aeci"