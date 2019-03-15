const functions = [];
for (let i = 0; i < 10; i++) {
  functions.push(() => { const localI = i; return localI; } ); // <- we should remove the parameter call; and create a local variable inside the anonymous function
}

for (let i = 0; i < functions.length; i++) {
  const functionToCall = functions[i];
  console.log(functionToCall());
}

