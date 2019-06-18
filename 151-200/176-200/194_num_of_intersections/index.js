function zipJs(arr1=[], arr2=[]) {
  return arr1.map((e, i) => {
    return [arr1[i], arr2[i]];
  });
}

function intersects(l1, l2) {
  // these lines intersect iff l1[0] > l2[0] and l1[1] > l2[1] or vice versa
  return (l1[0] < l2[0] && l1[1] > l2[1]) || (l1[0] > l2[0] && l1[1] < l2[1]);
}

function numIntersections(lst1=[], lst2=[]) {
  const lineSegments = zipJs(lst1, lst2);
  let count = 0;
  for (let i = 0; i < lineSegments.length; i++) {
    const l1 = lineSegments[i];
    const lineSegmentsSlice = lineSegments.slice(1);
    for (let j = 0; j < lineSegmentsSlice.length; j++) {
      const l2 = lineSegmentsSlice[j];
      if (intersects(l1, l2)) {
        count++;
      }
    }
  }
  return count;
}
