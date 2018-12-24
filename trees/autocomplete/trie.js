class Trie {
  constructor() {
    this.subset = {};
  }
  
  insert(text) {
    let newSubset = this.subset;
    for (const char of text) {
      if (Object.keys(newSubset).indexOf(char) < 0) {
        newSubset[char] = {};
      }
      newSubset = newSubset[char];
    }
    newSubset["__ENDS_HERE"] = true;

  }

  find(obj) {
    const result = [];
    for (let item in obj) {
      let subresult = [];
      if (item === "__ENDS_HERE") {
        subresult = [""];
      } else {
        subresult = [item + this.find(obj[item]).join("")];
      }
      result.push(...subresult);
    }
    return result;
  }

  findElements(prefix) {
    let subs = this.subset;
    for (const char of prefix) {
      if (Object.keys(subs).indexOf(char) >= 0) {
        subs = subs[char];
      } else {
        return [];
      }
    }
    return this.find(subs);
  }
}

module.exports = { Trie };