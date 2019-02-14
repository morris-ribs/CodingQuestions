function rand7() {
  return Math.floor(Math.random() * (8 - 1) + 1);
}

function rand5() {
  const r = rand7();
  if (r >=1 && r <= 5) {
    return r;
  }
  return rand5();
}

for (let i = 0; i < 10; i++) {
  console.log(rand5());
}