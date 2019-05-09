function majority(elements =[]) {
  let count = 0;
  let result = 0;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (i === 0 || count === 0) {
      result = element;
      count = 1;
    } else if (result === element) {
      count++;
    } else {
      count--;
    }
  }

  return result;
}

console.log(majority([1, 2, 1, 1, 3, 4, 1, 0])); // expected 1
