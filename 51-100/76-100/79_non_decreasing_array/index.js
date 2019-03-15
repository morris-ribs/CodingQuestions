/**In this problem, we can count each time an element goes down. 
 * Then, if it has went down more than twice, we can return False right away. 
 * But if count is one, and the element is one that cannot be erased by modifying only one endpoint of that downtick, then we should return False as well. 
 * */
function checkList(list) {
  let count = 0;
  for (let i = 0; i < (list.length - 1); i++) {
    const element = list[i];
    if (element > list[i+1]) {
      if (count > 0) {
        return false;
      }

      if ((i-1) >= 0 && (i+2) < list.length && element > list[i+2] && list[i+1] < list[i-1]) {
        return false;
      }

      count++;
    }
  }
  return true;
}

console.log(checkList([10, 5, 7])); // expected true
console.log(checkList([10, 5, 1])); // expected false