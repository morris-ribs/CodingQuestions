function nearest(arr=[], i) {
  for (let j = 1; j < arr.length; j++) {
    let low = i - j;
    let high = i + j;
    if (0 <= low && arr[low] > arr[i]) {
      return low;
    }

    if (high < arr.length && arr[high] > arr[i]) {
      return high;
    }
  }
}

function preprocess(arr=[]) {
  const cache = Array(arr.length).fill(null);
  for (let j = 0; j < (arr.length - 1); j++) {
    if (arr[j] > arr[j+1]) {      
      cache[j + 1] = j;
    } else if (arr[j + 1] > arr[j]) {
      cache[j] = j + 1;
    }
  }

  for (let i = 0; i < cache.length; i++) {
    const val = cache[i];
    if (val == null) {
      cache[i] = nearest(arr, i);      
    }
  }

  return cache;
}

console.log(nearest([4, 1, 3, 5, 6], 0)); // expected 3