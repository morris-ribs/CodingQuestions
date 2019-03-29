function reverse(str="", delimiters) {
  // Parse the string into words between delimiters using regex
  // Keep adjacent delimiters together ("greedy match")
  const regexWords = new RegExp('[' + delimiters + ']+');
  const words = str.split(regexWords);
  const regexNotWords = new RegExp('[^(' + delimiters + ')]+');
  const notWords = str.split(regexNotWords);
  const length = words.length;
  if (length > 0 && words[length-1] === "") {
    words.splice(length-1, 1);
  }
  
  const output = [];
  let j = words.length - 1;
  for (let i = 0; i < notWords.length; i++) {
    const notWord = notWords[i];
    output.push(notWord);
    if (j >= 0) {
      output.push(words[j--]);
    }
  }

  return output.join("");
}
