class FrequencyDict {
  constructor(S) {
    this.d = {};
    for (let i = 0; i < S.length; i++) {
      const c = S[i];
      this.increment(c);
    }
  }

  _createIfNotExists(char) {
    if (typeof this.d[char] === "undefined") {
      this.d[char] = 0;
    }
  }

  _delIfZero(char) {
    if (this.d[char] === 0) {
      delete this.d[char];
    }
  }

  isEmpty() {
    return (Object.keys(this.d).length === 0);
  }

  decrement(char) {
    this._createIfNotExists(char);
    this.d[char]--;
    this._delIfZero(char);
  }

  increment(char) {
    this._createIfNotExists(char);
    this.d[char]++;
    this._delIfZero(char);
  }
}

function anagramIndices(word="", S="") {
  const result = [];
  const freq = new FrequencyDict(word);
  const subs = S.substring(0, word.length);
  for (let i = 0; i < subs.length; i++) {
    const char = subs[i];
    freq.decrement(char);
  }

  if (freq.isEmpty()) {
    result.push(0);
  }

  for (let i = word.length; i < S.length; i++) {
    const startChar = S[i-word.length];
    const endChar = S[i];
    freq.increment(startChar);
    freq.decrement(endChar);
    if (freq.isEmpty()) {
      const beginningIndex = i - word.length + 1;
      result.push(beginningIndex);
    }
  }

  return result;
}

console.log(anagramIndices("ab", "abxaba"));