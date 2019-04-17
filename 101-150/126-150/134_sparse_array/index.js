class SparseArray {
  init(arr=[], N) {
    this.N = N;
    this._dict = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element !== 0) {
        this._dict[i] = element;
      }
    }
  }

  _checkBounds(i) {
    if (i < 0 || i >= this.N) {
      console.log("Out of bounds");
      return;
    }
  }

  set(i, val) {
    this._checkBounds(i);
    if (val !== 0) {
      this._dict[i] = val;
      return;
    } 
    
    if (typeof this._dict[i] !== "undefined") {
      delete this._dict[i];
    }
  }

  get(i) {
    this._checkBounds(i);
    return this._dict[i];
  }
}