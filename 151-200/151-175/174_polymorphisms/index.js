/**
 * Ad-hoc polymorphism is a type of polymorphism where you can implement and overload functions based on different types.
 * 
 * For example, the + operator in Python behaves differently when it's given a number vs. when it's given two strings. That's because it's been overloaded:
 * 
 *  - For numbers, we need to do addition
 *      - For integers, we can just do integer addition
 *      - For floats, we must use floating-point
 *  - For strings, we need to do string concatenation
 *  - For lists, we need to do list concatenation
 */
console.log(3+3); // 6
console.log("foo" + "bar"); // "foobar"

/**
 * Parametric polymorphism, on the other hand, has a generic implementation independent of types. That's why it is called parametric -- the type is parameterized.
 * 
 * For example, the push function of an array works generically on integers or strings.
 */
const arrNumbers = [1,2,3];
arrNumbers.push(4);
console.log(arrNumbers);
const arrStrings = ["foo", "bar"];
arrStrings.push("baz");
console.log(arrStrings);

/**
 * Subtype polymorphism is when we subclass a class and use each subclass' methods to implement a specific interface (or use the default interface). Because the interface is consistent it should still work regardless of whichever type of object we use.
 * 
 * For example, say we have a generic Shape class that might draw a shape to the screen. Then we might also have Circle and Square subclasses, each with their own draw method implemented differently, since they're different objects. It shouldn't matter -- a render_scene function should still be able to call draw() on any kind of shape and have it still work.
 */
class Shape {
  draw(coords) {
    console.log("Drawing shape at " + coords);
  }
}

class Circle {
  draw(coords) {
    console.log("Drawing circle at " + coords);
  }
}

class Square {
  draw(coords) {
    console.log("Drawing square at " + coords);
  }
}

function renderScene(objs=[], coords=[]) {
  for (let i = 0; i < objs.length; i++) {
    const shape = objs[i];
    const coord = coords[i];

    shape.draw(coord);
  }
}

const shapes = [ new Shape(), new Square(), new Circle() ];
const coords = [ "1,25", "2,5", "0,5" ];
renderScene(shapes, coords);