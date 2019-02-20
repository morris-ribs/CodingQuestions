function subarraymaxvaluesBruteForce(arr, k) {
  const limit = arr.length - k;
  for (let i = 0; i <= limit; i++) {
    console.log(Math.max(...arr.slice(i, i+k)));    
  }
}
function subarraymaxvalues(arr, k) {
  const queue = [];
  // queue initialization, with first K elements of main array
  for (let i = 0; i <= k; i++) {
    while (queue.length > 0 && arr[i] >= arr[queue[0]]) {
      queue.pop();
    }
    queue.push(i);
  }

  // main loop
  for (let i = k; i < arr.length; i++) {
    console.log(arr[queue[0]]);
    
    // remove all elements at the end of the queue
    while (queue.length > 0 && queue[0] <= (i-k)) {
      queue.splice((queue.length -1));
    }

    // new element is bigger than the elements in front of the queue
    while (queue.length > 0 && arr[i] >= arr[queue[0]]) {
      queue.pop();
    }
    queue.push(i);
  }

  console.log(arr[queue[0]]);
}
subarraymaxvalues([10, 5, 2, 7, 8, 7], 3);