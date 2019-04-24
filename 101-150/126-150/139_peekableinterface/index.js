class PeekableInterface {
  constructor(iterator) {
    this.iterator = iterator;
    this._next = next(this.iterator);
  }   

  peek() {
    return this._next;
  }

  next() {
    const result = this._next;
    this._next = next(this.iterator);
    return result;
  }

  hasNext() {
    return (!!this._next);
  }
}
