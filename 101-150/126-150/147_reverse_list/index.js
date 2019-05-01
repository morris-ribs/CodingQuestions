/*
This type of sorting is called pancake sorting and can be solved in a similar way as selection sort.

We iteratively put the maximum element to the end of the list using this strategy:

First, let size be the size of the list that we're concerned with sorting at the moment.
Then, we can find the position where the maximum element is in lst.slice(0, size+1), say maxInd.
Then, reverse the sublist from 0 to maxInd to put the element at the front.
Then, reverse the sublist from 0 to size to put the max element to the end.
Decrement size and repeat, until size is 0.
*/
function reverse(lst, i, j) {
  while (i < j) {
    const aux = lst[i];
    lst[i] = lst[j];
    lst[j] = aux;
    i++;
    j--;
  }
  return lst;
}

function maxPos(lst) {
  const maxList = Math.max(lst);
  return lst.findIndex(i => i === maxList);
}

function pancakeSort(lst) {
  for (let i = (lst.length-1); i >= 0; i--) {
    const maxInd = maxPos(lst.slice(0, size+1));
    lst = reverse(lst, 0, maxInd);
    lst = reverse(lst, 0, size);
  }
  return lst;
}