# Closures Question

What will this code print out?

```
function makeFunctions() {
  const flist = [];
  const arr = [1, 2, 3];
  for (let i = 0; i < arr.length; i++) {
    const printI = () => {
      console.log(arr[i]);
    };
    flist.push(printI);
  }

  return flist;
}

const functions = makeFunctions();
for (let j = 0; j < functions.length; j++) {
  const f = functions[j];
  f();
}
```