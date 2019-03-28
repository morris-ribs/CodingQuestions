function reverseWords(stringList) {
  // Helper function to reverse string in place
  const reverse = (l, start, end) => {
    const lAsArr = l.split('');
    // Reverses characters from index start to end (inclusive)
    while (start < end) {
      const aux = lAsArr[start];
      lAsArr[start] = lAsArr[end];
      lAsArr[end] = aux;
      start++;
      end--;
    }
    return lAsArr.join("");
  };

  // Reverse the entire string
  stringList = reverse(stringList, 0, stringList.length - 1);

  // Reverse each word in the string
  let start = 0;
  for (let end = 0; end < stringList.length; end++) {
    if (stringList[end] == ' ') {
      console.log(start, end);
      stringList = reverse(stringList, start, end - 1);
      start = end + 1;
    }
  }

  // Reverse the last word
  stringList = reverse(stringList, start, stringList.length - 1);

  return stringList;
}

console.log(reverseWords("hello world here")); // expected "here world hello"

