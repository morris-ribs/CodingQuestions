function partition(lst = [], x) {
  let i = 0;
  let j = 0;
  let k = lst.length - 1;

  while (j < k) {
    if (lst[j] === x) {
      j++;
    } else if (lst[j] < x) {
      const aux = lst[i];
      lst[i] = lst[j];
      lst[j] = aux;
      i++;
      j++;
    } else {
      const aux = lst[j];
      lst[j] = lst[k];
      lst[k] = aux;
      k--;
    }
  }

  return lst;
}

console.log(partition([9, 12, 3, 5, 14, 10, 10], 10));