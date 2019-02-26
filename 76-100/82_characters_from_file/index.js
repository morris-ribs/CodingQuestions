const file = "Hello World";

function read7() {
  return file.slice(0, 7);
}

class Reader {
  constructor() {
    this.remainder = "";
  }

  readN(n) {
    let result = this.remainder;
    let text = null;
    while (result.length < n && (text == null || text.length >= 5)) {
      text = read7();
      result += text;
    }

    this.remainder = result.slice(n);
    return result.slice(0, n);
  }
}

