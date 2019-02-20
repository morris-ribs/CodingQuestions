function countSubstitutions(str1, str2, count = 0) {
  if(str1 === "" || str2 === "") {
    return count;
  }

  if (str1[0] !== str2[0]) {
    count++;
  }

  return countSubstitutions(str1.substring(1), str2.substring(1), count);
}

function findEditDistance(str1, str2) {
  let count = countSubstitutions(str1, str2);
  if (str1.length !== str2.length) {
    count += Math.abs(str1.length - str2.length);
  }
  return count;
}

console.log(findEditDistance("kitten", "sitting")); // expected 3