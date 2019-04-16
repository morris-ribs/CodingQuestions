function reverse(list, i, j) {
  while (i < j) {
    const aux = list[i];
    list[i] = list[j];
    list[j] = aux;
    i++;
    j--;
  }
}

function rotate(list, K) {
  reverse(list, 0, K-1);
  reverse(list, K, list.length-1);
  reverse(list, 0, list.length-1);
  return list;
}

console.log(rotate([1, 2, 3, 4, 5, 6], 2)); // expected [3, 4, 5, 6, 1, 2]