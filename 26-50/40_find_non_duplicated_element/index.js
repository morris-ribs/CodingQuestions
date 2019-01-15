/*
  We can find the unique number in an array of two duplicates by XORing all the numbers in the array. 
  What this does is cancel out all the bits that have an even number of 1s, leaving only the unique (odd) bits out.

  Let's try to extend this technique to three duplicates. 
  Instead of cancelling out all the bits with an even number of bits, we want to cancel those out that have a number of bits that are multiple of three.

  Let's assume all integers fit in 32 bits. 
  Then let's create an array 32 zeroes long, and when iterating over each number in our array, we can add up all the bits to its proper spot in the array. 
  
  Finally, we'll go over each bit in the array and make it equal to itself modulo 3. 
  This means that any bit that has been set some multiple of 3 times will effectively be cleared, leaving only the bit from the unique number.
*/
function findNonDuplicated(arr) {
  const resultArr = Array(32).fill(0);
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    for (let j = 0; j < 32; j++) {
      const bit = num >> j & 1;
      resultArr[j] = (resultArr[j] + bit) % 3;
    }   
  }
  let result = 0;
  for (let i = 0; i < resultArr.length; i++) {
    const bit = resultArr[i];
    if (!!bit) {
      result += Math.pow(2, i);
    }
  }
  return result;
}

console.log(findNonDuplicated([6, 1, 3, 3, 3, 6, 6]));
console.log(findNonDuplicated([13,19,13,13]));