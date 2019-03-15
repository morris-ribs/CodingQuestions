const BIAS = 0.66;

function tossBiased() {
  return Math.random() > BIAS;
}

function tossFair() {
  const t1 = tossBiased();  
  const t2 = tossBiased();

  if (t1 && !t2) {
    return true;
  }

  if (!t1 && t2) {
    return false;
  }

  return tossFair();
}

const c= { true: 0, false: 0 };
let i = 1;
while (i < 10000) {
  const b = tossFair();
  if (typeof c[b] === "undefined") {
    c[b] = 0;
  }
  c[b]++;
  i++;
}

console.log(c);