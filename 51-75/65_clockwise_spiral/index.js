const UP = 0, RIGHT = 1, DOWN = 2, LEFT = 3;

const DIRECTIONS = [RIGHT, DOWN, LEFT, UP];

function nextDirection(direction) {
  switch (direction) {
    case RIGHT:
      return DOWN;
    case DOWN:
      return LEFT;
    case LEFT:
      return UP;
    default:
      return RIGHT;
  }
}

function nextPosition(position, direction) {
  switch (direction) {
    case RIGHT:
      return { x: position.x, y: position.y + 1 };
    case DOWN:
      return { x: position.x + 1, y: position.y };
    case LEFT:
      return { x: position.x, y: position.y - 1 };
    default:
      return { x: position.x - 1, y: position.y };
  }
}

function shouldChangeDirection(M, r, c) {
  const inBoundsR = 0 <= r  && r < M.length;
  const inBoundsC = 0 <= c && c < M[0].length;
  return !inBoundsR || !inBoundsC || M[r][c] == null;
}

function matrixSpiralPrint(M) {
  let remaining = M.length * M[0].length;
  let currentDirection = RIGHT;
  let currentPosiion = { x: 0, y: 0 };
  while (remaining > 0) {
    console.log(M[currentPosiion.x][currentPosiion.y]);
    M[currentPosiion.x][currentPosiion.y] = null;
    remaining--;
    let possibleNextPosition = nextPosition(currentPosiion, currentDirection);
    if (shouldChangeDirection(M, possibleNextPosition.x, possibleNextPosition.y)) {
      currentDirection = nextDirection(currentDirection);
      currentPosiion = nextPosition(currentPosiion, currentDirection);
    } else {
      currentPosiion = possibleNextPosition; 
    }
  }
}

matrixSpiralPrint(
  [[1,  2,  3,  4,  5],
 [6,  7,  8,  9,  10],
 [11, 12, 13, 14, 15],
 [16, 17, 18, 19, 20]]
);