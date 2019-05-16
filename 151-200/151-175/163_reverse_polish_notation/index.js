const PLUS = '+';
const MINUS = '-';
const TIMES = '*';
const DIVIDE = '/';

function rpn(expr=[]) {
  const stack = [];
  for (let i = 0; i < expr.length; i++) {
    const val = expr[i];
    switch (val) {
      case PLUS:
        stack.push(stack.pop() + stack.pop());
        break;
      case MINUS:
        stack.push(stack.pop() - stack.pop());
        break;
      case TIMES:
        stack.push(stack.pop() * stack.pop());
        break;  
      case DIVIDE:
        stack.push(stack.pop() / stack.pop());
        break;
      default:
        stack.push(val);
        break;
    }
  }
  return stack[0];
}

console.log(rpn([5, 3, '+'])); // expected 8
console.log(rpn([15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'])); // expected 5