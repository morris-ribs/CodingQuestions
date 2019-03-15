function multiTables(N, x) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if ((x%i) === 0 && (x/i) <= N) {
      count++;
    }
  }
  return count;
}

console.log(multiTables(6, 12)); // exoected 4