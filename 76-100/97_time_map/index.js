class TimeMap {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  get(key) {
    if (this.keys == null || this.keys.length === 0) {
      return null;
    }

    let i = this.keys.findIndex(k => k === key);
    if (i >= 0) {
      return this.values[i];
    } 

    // look for the first key less than k
    i = this.keys.findIndex(k => k < key);
    if (i >= 0) {
      return this.values[this.values.length-1];
    }
    return null;
  }

  set(key, value) {
    let i = this.keys.findIndex(k => k === key);
    if (i >= 0) {
      this.values[i] = value;
      return;
    }

    i = this.keys.findIndex(k => k > key);
    if (i < 0) {
      this.keys.push(value);
      this.values.push(value);
      return;
    }

    this.keys.splice(i, 0, key);
    this.values.splice(i, 0, value);
  }
}

class MultiTimeMap{
  constructor() {
    this.map = {};
  }

  set(key, value, time) {
    if (typeof this.map[key] === "undefined") {
      this.map[key] = new TimeMap();
    }
    this.map[key].set(time, value);
  }

  get(key, time) {
    const timeMap = this.map[key];
    if (typeof timeMap === "undefined" || timeMap == null) {
      return null;
    }
    return timeMap.get(time);
  }
}

let d = new MultiTimeMap();
d.set(1, 1, 0); // set key 1 to value 1 at time 0
d.set(1, 2, 2); // set key 1 to value 2 at time 2
console.log(d.get(1, 1)); // get key 1 at time 1 should be 1
console.log(d.get(1, 3)); // get key 1 at time 3 should be 2

d = new MultiTimeMap();
d.set(1, 1, 5); // set key 1 to value 1 at time 5
console.log(d.get(1, 0)); // get key 1 at time 0 should be null
console.log(d.get(1, 10)); // get key 1 at time 10 should be 1

d = new MultiTimeMap();
d.set(1, 1, 0); // set key 1 to value 1 at time 0
d.set(1, 2, 0); // set key 1 to value 2 at time 0
console.log(d.get(1, 0)); // get key 1 at time 0 should be 2 