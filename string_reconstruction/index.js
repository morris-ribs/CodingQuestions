function getList(dict, initialStr, str, indArr, initialIndex = 0, results = []) {
  if (initialIndex === dict.length) { 
    return null;
  }
  
  if (str.length === 0) {
    return results;
  }

  if (indArr === dict.length) { // restart everything with next dictionary entry
    return getList(dict, initialStr, initialStr, ++initialIndex, initialIndex);
  }

  const stringToFind = dict[indArr];
  if (str.startsWith(stringToFind)) {
    str = str.substring(stringToFind.length);
    results.push(stringToFind);
    return getList(dict, initialStr, str, 0, initialIndex, results);
  } 
  
  return getList(dict, initialStr, str, ++indArr, initialIndex, results);
}

function stringreconstruction(dict, str) {
  if (str) {
    return getList(dict, str, str, 0); 
  }
  return null;
}

let dict = ["quick", "brown", "the", "fox"];
let str = "thequickbrownfox";
console.log(stringreconstruction(dict, str));

dict = ['bedbath', 'bed', 'bath', 'and', 'beyond'];
str = "bedbathandbeyond";
console.log(stringreconstruction(dict, str));

dict = ['he', 'hell', 'hello', 'world'];
str = "helloworld";
console.log(stringreconstruction(dict, str));

dict = ['he', 'hell', 'hello', 'world', 'of'];
str = "hellofaworld";
console.log(stringreconstruction(dict, str));


dict = ['he', 'hell', 'hello', 'world', 'of', 'a'];
str = "hellofaworld";
console.log(stringreconstruction(dict, str));

dict = ['he', 'hell', 'hello', 'world'];
str = "helloworldbye";
console.log(stringreconstruction(dict, str));

dict = [];
str = "helloworld";
console.log(stringreconstruction(dict, str));


dict = [];
str = "";
console.log(stringreconstruction(dict, str));