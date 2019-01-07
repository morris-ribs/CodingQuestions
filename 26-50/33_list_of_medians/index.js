function findIndexInOrderedList(arr, num, index=0) {
  if(arr.length === 0) {
    return index;
  }
  if (arr.length === 1) {
    if(arr[0] < num) {
      return index + 1;
    }
    return index;
  }

  if (arr[arr.length - 1] <= num) {
    return index + (arr.length - 1);
  }

  const medIndex = Math.floor(arr.length/2);
  if (arr[medIndex] === num) {
    return (index + medIndex);
  }

  if (arr[medIndex] >= num) {
    return findIndexInOrderedList(arr.slice(0, medIndex), num, index);
  }
  
  return findIndexInOrderedList(arr.slice(medIndex, arr.length), num, (index + medIndex));
}

function listOfMedians(arr) {
  const result = [];
  let orderedList = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (i === 0) {
      orderedList.push(element);
    } else {
      const index = findIndexInOrderedList(orderedList, element);
      if (index === 0) { 
        orderedList.unshift(element);
      } else if (index >= (orderedList.length - 1)) {
        orderedList.push(element);
      } else {
        const subArr1 = orderedList.slice(0, index);
        const subArr2 = orderedList.slice(index, orderedList.length);

        orderedList = [...subArr1, element, ...subArr2];
      }
    }
    
    const medianIndex = (orderedList.length/2);
    let elementToAdd;
    if (i%2 === 0) { // odd-size ordered list
      const index = Math.floor(medianIndex);
      elementToAdd = orderedList[index];
    } else {
      const indexMin = medianIndex - 1;
      elementToAdd = (orderedList[indexMin] + orderedList[medianIndex])/2;
    }
    result.push(elementToAdd);
  }
  return result;
}

console.log(listOfMedians([1, 2, 5, 7, 2, 0, 5]));