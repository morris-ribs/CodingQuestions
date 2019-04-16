function towerOfHanoi(N, A="1", B="2", C="3") {
  if (N >= 1) {
    towerOfHanoi(N-1, A, C, B);
    console.log("Move " + A + " to " + C);
    towerOfHanoi(N-1, B, A, C);
  }
}

towerOfHanoi(3);

// expected
// Move 1 to 3
// Move 1 to 2
// Move 3 to 2
// Move 1 to 3
// Move 2 to 1
// Move 2 to 3
// Move 1 to 3