function compare(a, b) {
  if (a.start < b.start)
      return -1;
  if (a.start > b.start)
      return 1;
  return 0;
}

function intersecting(x,y) {
  return !(x.start > y.end || y.start > x.end);
}

function covering(intervals) {
  const sortedIntervals = intervals.sort(compare);
  const result = [];  
  let i = 0;

  while (i < sortedIntervals.length) {
    let interval = sortedIntervals[i];
    while (i < sortedIntervals.length && intersecting(sortedIntervals[i], interval)) {
      interval = { start: Math.max(sortedIntervals[i].start, interval.start), end: Math.min(sortedIntervals[i].end, interval.end) };
      i++;
    }
    result.push(interval.start);
  }
  
  return result;
}

console.log(covering([{ start: 0, end: 3 }, { start: 2, end: 6 }, { start: 3, end: 4 }, { start: 6, end: 9 }])); // expected {3, 6}