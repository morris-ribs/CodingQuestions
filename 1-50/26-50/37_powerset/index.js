function powerset(arr) {
  const result = [];
  result.push([]);

  for (let i = 0; i < arr.length; i++) {
    result.push([]);
    const element = arr[i];
    for (let j = i; j >= 1; j--) {
      const subSet = result[j];
      for (let k = 0; k < subSet.length; k++) {
        const subElement = subSet[k];
        const newArr = [...subElement, element];
        result[j+1].push(newArr);
      }
    }
    result[1].push([element]);
  }

  return result;
}

// official solution: recursive
function powerSet(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  const result = powerSet(arr.slice(1));
  let aux = [];
  for (let i = 0; i < result.length; i++) {
    const subSet = result[i];
    aux.push([[arr[0]], ...subSet]);
  }
  return [...result, ...aux];
}

// console.log(powerset([1,2,3])); // expected [[], [[1],[2],[3]], [[1,2],[2,3]], [1,2,3]]
console.log(powerSet([1,2,3])); // expected [[], [[1],[2],[3]], [[1,2],[2,3]], [1,2,3]]