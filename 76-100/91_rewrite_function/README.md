# Rewrite function

What does the below code snippet print out? How can we fix the anonymous functions to behave as we'd expect?

```
const functions = [];
for (let i = 0; i < 10; i++) {
  functions.push(i => i);
}

for (let i = 0; i < functions.length; i++) {
  const functionToCall = functions[i];
  console.log(functionToCall());
}
```