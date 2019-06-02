function interleave(stack=[]) {
  const size = stack.length;
  let queue = [];

  // Step 1
  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  // Step 2
  let i = 0;
  while (i < Math.floor(size/2)) {
    i++;
    queue.push(queue.shift());
  }

  // Step 3
  i = 0;
  while (i < Math.ceil(size/2)) {
    i++;
    stack.push(queue.shift());
  }

  // Step 4
  i = 0;
  while (i < Math.floor(size/2)) {
    i++;
    queue.push(stack.pop());
    queue.push(queue.shift());
  }

  if (stack.length > 0) {
    queue.push(stack.pop());
  }

  // Step 5
  while (queue.length > 0) {
    stack.push(queue.shift());
  }
  return stack;
}

console.log(interleave([1, 2, 3, 4, 5])); // expected [ 1, 5, 2, 4, 3 ]
console.log(interleave([1, 2, 3, 4])); // expected [ 1, 4, 2, 3 ]