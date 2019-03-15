// X and Y co-ordinates of the points in order.
// Each point is represented by (X.get(i), Y.get(i))
function getDistance(x1, y1, x2, y2) {
  return Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
}

function coverPoints(X = [], Y = []) {
  let totalDistance = 0;
  for (let i = 1; i < X.length; i++) {
    totalDistance += getDistance(X[i - 1], Y[i - 1], X[i], Y[i]);
  }
  return totalDistance;
}

// example taken from README
console.log(coverPoints([0,1,2], [0,1,2]));