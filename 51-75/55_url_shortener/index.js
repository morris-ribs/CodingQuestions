class URLShortener {
  constructor() {
    this.shortToUrl = {};
    this.urlToShort = {};
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  generateShort() {
    let i = 0;
    let result = "";
    const bigString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    while (i < 6) {
      result += bigString[this.getRandomInt(bigString.length)];
      i++;
    }
    
    return result;
  }

  generateUnusedShort() {
    let s = this.generateShort();
    while (!!this.shortToUrl[s]) {
      s = this.generateShort();
    }
    return s;
  }

  shorten(url) {
    const short = this.generateUnusedShort();
    if (!!this.urlToShort[url]) {
      return this.urlToShort[url];
    }
    this.shortToUrl[short] = url;
    this.urlToShort[url] = short;
    return short;
  }

  restore(short) {
    return this.shortToUrl[short] || null;
  }
}

const urlShortener = new URLShortener();
const sh = urlShortener.shorten("http://www.google.com");
console.log(sh);
console.log(urlShortener.restore(sh)); // expected http://www.google.com