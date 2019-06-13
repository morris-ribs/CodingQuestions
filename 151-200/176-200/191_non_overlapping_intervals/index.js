function compare(a, b) {
  if (a.end < b.end)
     return -1;
  if (a.end > b.end)
     return 1;
  // a === b
  return 0;
}

function nonOverlappingIntervals(intervals=[]) {
  let currentEnd = -Infinity;
  let overlapping = 0;
  const sortedIntervals = intervals.sort(compare);
  for (let i = 0; i < sortedIntervals.length; i++) {
    const interval = sortedIntervals[i];
    if (interval.start >= currentEnd) {
      currentEnd = interval.end;
    } else {
      overlapping++;
    }
  }

  return overlapping;
}

const intervals = [{ start: 7, end: 9 }, { start: 2, end: 4 }, { start: 5, end: 8 }];
console.log(nonOverlappingIntervals(intervals)); // expected 1