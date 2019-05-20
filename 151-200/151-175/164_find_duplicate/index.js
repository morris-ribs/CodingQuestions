// We can also simply sum up all the elements in the array and subtract it by the sum of 1 to n, using the formulas n * (n + 1) / 2. 
// We should be left with the duplicate.
function duplicate(list=[]) {
  const n = list.length - 1;
  return list.reduce((a,b) => (a || 0) +b) - Math.floor(n * (n + 1) / 2);
}
