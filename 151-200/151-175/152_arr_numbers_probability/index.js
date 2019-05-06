
function preprocess(probs) {
  const lst = [];

  let currentVal = 0;
  for (let i = 0; i < probs.length; i++) {
    const p = probs[i];
    currentVal += p;
    lst.push(currentVal);
  }
  return lst;
}

function distribute(nums=[], arr=[]) {
  const r = Math.random();
  let i = 0;
  let maxProb = 0;
  arr.map((prob, ind) => {
    if (prob > maxProb && prob <= r) {
      i = ind;
      maxProb = prob;
    }
  });
  return nums[i];
}

let i = 0;
const results = [];
const nums = [1, 2, 3, 4];
const probs = [0.1, 0.5, 0.2, 0.2];
while (i < 10) {
  i++;
  results.push(distribute(nums, probs));
}
console.log(results);