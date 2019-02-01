/*We can obviously do this problem in linear time if we looked at each element in the array. However, we need to do it faster than linear time. A big clue should be that the array of integers was previously sorted, and then rotated. If it was just sorted, we could do a binary search. However, this array was also rotated, so we can't do a regular binary search. We can modify it slightly to get to where we want it, however.

In our solution, we first find the rotation point using binary search. We do this by:

Checking the midpoint for the rotation point (by comparing it to the previous number and seeing if it's larger)
Moving our check up or down the array:
If the number we're looking at is larger than the first item in the array, then the rotation must occur later, so add dist
If not, then it must occur before, so subtract dist
And then update dist by dividing it by 2 and taking its floor (so it's proper binary search).
Then, once we have the rotation point, we can do binary search as usual by remembering to offset the correct amount. */


function shiftedArraySearch(lst, num) {
  // First, find where the breaking point is in the shifted array
  let i = Math.floor(lst.length/2);
  let dist = Math.floor(i/2);

  while(true) {
    if (lst[0] > lst[i] && lst[i-1] > lst[i]) {
      break;
    }
    if (dist === 0) {
      break;
    }
    if (lst[0] <= lst[i]) {
      i += dist;
    } else if (lst[i-1] <= lst[i]) {
      i -= dist;
    } else {
      break;
    }

    dist = Math.floor(dist/2);
  }

  // Now that we have the bottom, we can do binary search as usual,
  //  wrapping around the rotation. 
  let low = i;
  let high = (i - 1);
  dist = Math.floor(lst.length/2);

  while (true) {
    if (dist === 0) {
      return null;
    }

    const guessInd = (low + dist) % lst.length;
    const guess = lst[guessInd];
    if (guess === num) {
      return guessInd;
    }

    if (guess < num) {
      low = (low + dist) % lst.length;
    }

    if (guess > num) {
      high = (lst.length + high - dist) % lst.length;
    }

    dist = Math.floor(dist/2);
  }
}

console.log(shiftedArraySearch([13, 18, 25, 2, 8, 10], 8)); // expected 4