function arrangeRgbArray(arr) {
  let countR = 0, countG = 0, hasB = false;
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    switch (elem) {
      case 'R': {
        if (countG > 0 || hasB) {
          const firstElementG = (countG > 0) ? arr[countR] : '';
          const firstElementB = hasB ? arr[countR+countG] : '';

          arr[countR] = elem;
          if (firstElementG !== '') {
            arr[countR + countG] = firstElementG;
          }
          if (hasB) {
            arr[i] = firstElementB;
          }
        }
        countR++;
      }    
        break;
      case 'G': {
        if (hasB) {
          const firstElementB = arr[countR+countG];
          arr[countR+countG] = elem;
          arr[i] = firstElementB;
        }
        countG++;
      }    
        break;    
      default:
        hasB = true;
        break;
    }
  }
  return arr;
}

console.log(arrangeRgbArray(['G', 'B', 'R', 'R', 'B', 'R', 'G']));
console.log(arrangeRgbArray(['B', 'R', 'G', 'B', 'R', 'R', 'B', 'R', 'G']));