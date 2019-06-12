function getPermutations(array, size) {

  function p(t, i) {
    if (t.length === size) {
      result.push(t);
      return;
    }
    if (i + 1 > array.length) {
      return;
    }
    p(t.concat(array[i]), i + 1);
    p(t, i + 1);
  }

  var result = [];
  p([], 0);
  return result;
}

function arrDiff (a1, a2) {
  const a = [], diff = [];

  for (let i = 0; i < a1.length; i++) {
    a[a1[i]] = true;
  }

  for (let i = 0; i < a2.length; i++) {
    if (a[a2[i]]) {
      delete a[a2[i]];
    } else {
      a[a2[i]] = true;
    }
  }

  for (let k in a) {
    diff.push(parseInt(k));
  }

  return diff;
}

function subsetPairs(nums=[]) {
  const n = nums.length;
  const result = [];
  let i = 1;
  while (i < (n+1)) {
    const subSets = getPermutations(nums, i);
    subSets.forEach(sub => {
      result.push({ subSet1: sub, subSet2: arrDiff(nums, sub) });
    });
    i++;
  }
  return result;
}

function twoSubsets(nums=[]) {
  let smallestDiff = Infinity;
  let result = null;
  const array = subsetPairs(nums);
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // auxiliary function to sum numbers of an array
    const sum = (nums) => {
      let s = 0;
      for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        s += num;
      }
      return s;
    };
    const diff = Math.abs(sum(element.subSet1) - sum(element.subSet2));
    if (diff < smallestDiff) {
      smallestDiff = diff;
      result = element;
    }
  }
  return result;
}

console.log(twoSubsets([5,10,15,20,25])); // expected [10, 25] and [5, 15, 20]
