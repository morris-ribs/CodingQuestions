const T = require('./trie');
const Trie = T.Trie;

function autocomplete(entry, arr) {
  const trie = new Trie();
  for (const str of arr) {
    trie.insert(str);
  }
  return trie.findElements(entry);
}

console.log(autocomplete("de", ["dog", "deer", "deal"]));

module.exports = autocomplete;