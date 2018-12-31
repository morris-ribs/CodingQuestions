/**
 * The idea here is to use either BFS or DFS to explore the board, starting from the start coordinate, and keep track of what we've seen so far as well as the steps from the start until we find the end coordinate.

  In our case, we'll use BFS. We'll create a queue and initialize it with our start coordinate, along with a count of 0. We'll also initialize a seen set to ensure we only add coordinates we haven't seen before.

  Then, as long as there's something still in the queue, we'll dequeue from the queue and first check if it's our target coordinate -- if it is, then we can just immediately return the count. Otherwise, we'll get the valid neighbours of the coordinate we're working with (valid means not off the board and not a wall), and enqueue them to the end of the queue.

  To make sure the code doesn't get too messy, we'll define some helper functions: walkable, which returns whether or not a tile is valid, and get_walkable_neighbours which returns the valid neighbours of a coordinate.
 */

/**
 * Given a row and column, returns whether that tile is walkable.
 */
function walkable(board, row, col) {
  if (row < 0 || row >= board.length) {
    return false;
  }
  if (col < 0 || col >= board[0]) {
    return false;
  }

  return !board[row][col];
}

/**
 * Gets walkable neighbouring tiles.
 */
function getWalkableNeighbours(board, row, col) {
  const result = [];
  if (walkable(board, row, col-1)) {
    result.push({ row: row, col: (col-1) });
  }
  if (walkable(board, row, col+1)) {
    result.push({ row: row, col: (col+1) });
  }
  if (walkable(board, row-1, col)) {
    result.push({ row: (row-1), col: col });
  }
  if (walkable(board, row+1, col)) {
    result.push({ row: (row+1), col: col });
  }
  return result;
}

function shortestPath(board, start, end) {
  const seen = [];
  const queue = [];
  queue.push({ coords: start, count: 0 });
  while (queue.length > 0) {
    const obj = queue.pop();
    if (obj.coords.row === end.row && obj.coords.col === end.col) {
      return obj.count;
    }
    
    seen.push(obj.coords);
    const neighbours = getWalkableNeighbours(board, obj.coords.row, obj.coords.col);
    for (const neighbour of neighbours) {
      const indexInSeen = seen.findIndex(seenCoords => seenCoords.row === neighbour.row && seenCoords.col === neighbour.col );
      if (indexInSeen < 0) {
        queue.unshift({ coords: neighbour, count: obj.count + 1 });
      }
    }
  }
  return null;
}

const board = [
  [false, false, false, false],
  [true, true, false, true],
  [false, false, false, false],
  [false, false, false, false]
];

console.log(shortestPath(board, { row: 0, col: 0 }, { row: 3, col: 0 }));