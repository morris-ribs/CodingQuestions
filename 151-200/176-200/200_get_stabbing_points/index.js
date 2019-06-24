/*
  To gain some insight, let's take a look at the following intervals: [(1, 4), (4, 4), (3, 9)]. It is clear that if we choose 4, we can satisfy every interval. So we might guess that choosing the earliest endpoint is an optimal strategy. Can we prove this?

  In fact, yes! First, we know that we must choose a point less than or equal to the earliest endpoint. Otherwise, the interval that contains that endpoint will never get stabbed. On the other hand, we know that that endpoint is at least as good as any lesser point in that interval, because it intersects every interval that the lesser point does, and potentially others. For instance, in the example above, if we chose 3 instead of 4, we would not have been able to catch (4, 4).

  This shows that an optimal greedy strategy exists. First, we sort the intervals by ascending endpoint. Then, as we traverse the list, whenever we reach an interval that is not stabbed by any points in our solution, we take its endpoint and add it to our solution. Since the intervals are sorted, we need only consider the most recently added endpoint to determine if there is an intersection.
*/
function sortPointsByAscendingEndpoint(a, b) {
  return a.end - b.end;
} 

function getStabbingPoints(intervals=[]) {
  const sortedIntervals = intervals.sort(sortPointsByAscendingEndpoint);

  const points = [];
  let latestEndpoint = null;

  for (let i = 0; i < sortedIntervals.length; i++) {
    const point = sortedIntervals[i];
    if (point.start <= latestEndpoint) {
      continue;
    }

    points.push(point.end);
    latestEndpoint = point.end;
  }

  return points;
}

const X = [
  { start: 1, end: 4 },
  { start: 4, end: 5 },
  { start: 7, end: 9 },
  { start: 9, end: 12 }
];
console.log(getStabbingPoints(X)); // expected [4, 9]