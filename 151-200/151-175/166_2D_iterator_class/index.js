class Iterator {
  constructor(lists=[]) {
    this._lists = lists;
    this.i = null;
    this.j = null;
  }

  _nextCoords(i, j) {
    // Gets the coordinates of the next valid element.
    if (this._lists.length === 0) {
      return null;
    }

    if (i == null && j == null) {
      i = 0;
      while (i < this._lists.length) {
        if (this._lists[i].length > 0) {
          return { i: i, j: 0 };
        }
        i++;
      }
    }

    if ((j + 1) < this._lists[i].length) {
      return { i: i, j: j+1 };
    }

    i++;
    while (i < this._lists.length) {
      if (this._lists[i].length > 0) {
        return { i: i, j: 0 };
      }
      i++;
    }

    return null;
  }

  next() {
    const coords = this._nextCoords(this.i, this.j);
    if (coords == null) {
      console.log("No more elements");
      return;
    } 
    this.i = coords.i;
    this.j = coords.j;

    return this._lists[this.i][this.j];
  }

  hasNext() {
    const coords = this._nextCoords(this.i, this.j);
    return (coords != null);
  }
}

const it = new Iterator([[1, 2], [3], [], [4, 5, 6]]);
while (it.hasNext()) {
  console.log(it.next());
}