function normalizeContent(strToAdd, k) {
  let currentStrIndex = 0;
  const wordsInString = strToAdd.split(" ");
  while (strToAdd.length < k) {
    const stringToReplace = wordsInString[currentStrIndex];
    strToAdd = strToAdd.replace(stringToReplace, stringToReplace + " ");
    currentStrIndex = (currentStrIndex < (wordsInString.length - 2)) ? currentStrIndex + 1 : 0;
  }
  return strToAdd;
}

function justify(arr, k) {
  let aux = "", strToAdd = "";
  let i = 0, length = arr.length;
  const result = [];
  while (i < length) {
    const elem = arr[i];
    const lengthToCompare = strToAdd.length + elem.length + aux.length;
    if (lengthToCompare <= k) {
      strToAdd += aux + elem;
      aux = " ";
      if (i === length - 1) {        
        result.push(normalizeContent(strToAdd, k));
      }
    } else {
      result.push(normalizeContent(strToAdd, k));
      strToAdd = elem;
    }
    i++;
  }
  return result;
}
  
const arr = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
console.log(justify(arr, 16));