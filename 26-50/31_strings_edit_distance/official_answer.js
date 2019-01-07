/**
 * The "naive" recursive solution runs very slowly due to repeated subcomputations. 
 * We can speed it up by using dynamic programming and storing the subcomputations in a 2D matrix. 
 * The index at i, j will contain the edit distance between s1[i] and s2[j]. 
 * Then, once we fill it up, we can return the value of the matrix at A[-1][-1].
 */
function distance(s1, s2) {
  let x = s1.length + 1; // the length of the x-coordinate
  let y = s2.length + 1; // the length of the y-coordinate

  const arr = [];
  for (let j = 0; j < y; j++) {
    arr[j] = [];
    for (let i = 0; i < x; i++) {
      arr[j][i] = -1;  
    }   
  }

  for (let i = 0; i < x; i++) {
    arr[0][i] = i;    
  }

  for (let j = 0; j < y; j++) {
    arr[j][0] = j;  
  }

  for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
      if (s1[j-1] === s2[i-1]) {
        arr[i][j] = arr[i-1][j-1];
      } else {
        arr[i][j] = Math.min(
            arr[i-1][j] + 1, 
            arr[i][j-1] + 1, 
            arr[i-1][j-1] + 1
          )
      }
    } 
  }
  return arr[y-1][x-1]; // edit distance between two strings
}

console.log(distance("kitten", "sitting")); // expected 3