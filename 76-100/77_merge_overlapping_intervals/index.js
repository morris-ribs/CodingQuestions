function mergeIntervals(intervals=[]) {
  const result = [];

  const sortedIntervals = intervals.sort((elem1, elem2) => (elem1.start > elem2.start) ? 1 : -1);

  for (let i = 0; i < sortedIntervals.length; i++) {
    const interval = sortedIntervals[i];
    // If current interval overlaps with the previous one, combine them
    if (result.length > 0 && interval.start <= result[result.length-1].end) {
      const prevInterval = result[result.length-1];
      result[result.length-1] = { start: prevInterval.start, end: Math.max(interval.end, prevInterval.end) };
    } else {
      result.push(interval);
    }
  }

  return result;
}

console.log(mergeIntervals([
  { start: 1, end: 3 }, { start: 5, end: 8 }, { start: 4, end: 10 }, { start: 20, end: 25 }
])); // expected [{ start: 1, end: 3 }, { start: 4, end: 10 }, { start: 20, end: 25 }]