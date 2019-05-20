function smallerCountsNaive(lst=[]) {
  const result =[];

  for (let i = 0; i < lst.length; i++) {
    const num = lst[i];
    let count = 0;
    for (let j = (i+1); j < lst.length; j++) {
      const val = lst[j];
      if (val < num) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
}

const arr = [3, 4, 9, 6, 1]; 
console.log(smallerCountsNaive(arr)); // expected [1, 1, 2, 1, 0]