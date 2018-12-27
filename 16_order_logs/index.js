const log = [];
let lastElementIndex = -1;
let N = 10;

/**
 * Adds the order_id to the log
 * @param {string} order_id the order id
 */
function record(order_id) {
  if (lastElementIndex === (N-1)) {
    lastElementIndex = 0;
  } else {
    lastElementIndex++;
  }
  log[lastElementIndex] = order_id;
}

/**
 * Gets the ith last element from the log. 
 * @param {integer} i the position
 */
function get_last(i) {
  if (i > log.length) {
    return null;
  }
  let aux = lastElementIndex + 1;
  let ind;
  if (i > aux) {
    ind = (N + aux) - i;
  } else {
    ind = aux - i;
  }
  return log[ind];
}

record("One");
record("Two");
record("Three");
record("Four");
record("Five");
record("Six");
record("Seven");
record("Eight");
record("Nine");
record("Ten");

console.log(get_last(1));
console.log(get_last(7));

record("Eleven");
record("Twelve");
record("Thirteen");
record("Fourteen");

console.log(get_last(1)); // expected "Fourteen"
console.log(get_last(5)); // expected "Ten"
console.log(get_last(7)); // expected "Eight"