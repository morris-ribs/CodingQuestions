function outOfOrder(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let count = 0;
  let min = 0, max = 0;

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    if (num > arr[max]) {
      max = i;
    } else {
      if (num < arr[min]) {        
        min = i;
        count += (min-0);
      } else {
        count++;
      }
    }
  }

  return count;
}

console.log(outOfOrder([2, 4, 1, 3, 5])); // expected 3
console.log(outOfOrder([5, 4, 3, 2, 1])); // expected 10