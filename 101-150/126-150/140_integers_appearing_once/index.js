function arrayTwoElementsNaive(arr=[]) {
  const d = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if(typeof d[num] === "undefined") {
      d[num] = 0;
    }
    d[num]++;
  }
  const result = [];
  Object.keys(d).forEach(num => {
    const count = d[num];
    if (count === 1) {
      result.push(num);
    }
  });

  return result;
}

/*
  We can XOR all the numbers in our input array. Since all duplicates will cancel out, we'll end up getting the XOR of the two numbers we're looking for.
  However, we need to untangle the actual real numbers from this XOR'd result. The key here is to find a set bit the XOR'd result.
  Since the two numbers are unique and thus distinct, there must be a set bit. Let's call it i. Since this bit ended up set, that also means that the two numbers we're looking for differ at this bit. Let's call the unique number with i set x and the unique number with i not set y.
  Now we go through the array again. For each number, there are two cases:
  Bit i is set on that number. If so, then it might be x, so let's group it in a bucket.
  Bit i is not set on that number. If so, then it might be y, so let's group it in another bucket.
  Then we can XOR all the numbers in each bucket (like in Problem #40) to get the two numbers we're looking for.
*/
function arrayTwoElements(arr=[]) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    xor = xor ^ num;
  }

  // Get rightmost set bit
  xor = xor ^ -xor;
  const rets = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num & xor) {
      rets[0] = rets[0] ^ num;
    } else {
      rets[1] = rets[1] ^ num;  
    }
  }
  return rets;
}

const sample = [2, 4, 6, 8, 10, 2, 6, 10];
console.log(arrayTwoElementsNaive(sample));
console.log(arrayTwoElements(sample));