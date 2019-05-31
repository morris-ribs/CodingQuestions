function mappingExists(s1="", s2="") {
  if (s1.length !== s2.length) {
    return false;
  }
  const mapping = {};
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    const char2 = s2[i];
    
    if (typeof mapping[char1] === "undefined") {  
      mapping[char1] = char2;
    } else if (mapping[char1] !== char2) {
      return false;
    }
  }
  
  return true;
}

console.log(mappingExists("abc","bcd")); // return true
console.log(mappingExists("foo","bar")); // return false