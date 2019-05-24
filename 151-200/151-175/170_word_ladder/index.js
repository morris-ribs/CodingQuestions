/*
We can model this problem as a graph: the nodes will be the words in the dictionary, and we can form an edge between two nodes if and only if one character can be modified in one word to get to the other.

Then we can do a typical breadth-first search starting from start and finishing once we encounter end:
*/
const ALPHABET="abcdefghijklmnopqrstuvwxyz";

function wordLadder(start="", end="", words=[]) {
  let lst = [{ word: start, path: [start] }];

  while (lst.length !== 0) {
    const element = lst.splice(0, 1);
    const obj = element[0];
    if (obj.word === end) {
      return obj.path;
    }

    for (let i = 0; i < obj.word.length; i++) {
      for (let j = 0; j < ALPHABET.length; j++) {
        const c = ALPHABET[j];
        const nextWord = obj.word.slice(0, i) + c + obj.word.slice(i+1);
        const ind = words.findIndex(w => w === nextWord);
        if (ind >= 0) {
          words.splice(ind, 1);
          lst.push({word: nextWord, path: [...obj.path, nextWord]});
        }
      }
    }
  }

  return null;
}

console.log(wordLadder("dog", "cat", ["dot", "dop", "dat", "cat"])); // expected ["dog", "dot", "dat", "cat"]
console.log(wordLadder("dog", "cat", ["dot", "tod", "dat", "dar"])); // expected null