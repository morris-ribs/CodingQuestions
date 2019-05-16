class Node {
  constructor(char=null) {
    this.char = char;
    this.children = {};
    this.finished = false;
    this.count = 0;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (typeof node.children[char] === "undefined") {
        node.children[char] = new Node(char);
      }
      node.count++;
      node = node.children[char];
    }
    node.finished = true;
  }

  uniquePrefix(word) {
    let node = this.root;
    let prefix = "";

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (node.count === 1) {
        return prefix;
      }
      node = node.children[char];
      prefix += char;
    }

    return prefix;
  }
}

function shortestUniquePrefix(list) {
  const trie = new Trie();
  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    trie.insert(word);
  }

  const result = list.map(word => trie.uniquePrefix(word));
  return result; 
}

const list = ["dog", "cat", "apple", "apricot", "fish"];
console.log(shortestUniquePrefix(list));