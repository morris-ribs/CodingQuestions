function maximumProductOfThree(lst) {
  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
  let min1 = Infinity, min2 = Infinity;

  for (let i = 0; i < lst.length; i++) {
    const x = lst[i];
    if (x > max1) {
      max3 = max2;
      max2 = max1;
      max1 = x;
    } else if (x > max2) {
      max3 = max2;
      max2 = x;  
    } else if (x > max3) {
      max3 = x;  
    }

    if (x < min1) {
      min2 = min1;
      min1 = x;  
    } else if (x < min2) {
      min2 = x;  
    }
  }

  return Math.max((max1*max2*max3), (max1*min1*min2));
}

console.log(maximumProductOfThree([-10, -10, 5, 2]));
