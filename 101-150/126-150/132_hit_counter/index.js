class HitCounter {
  constructor() {
    this.hits = [];
  }

  record(timestamp) {
    this.hits.push(timestamp);
  }

  total() {
    return this.hits.length;
  }

  range(lower, upper) {
    let count = 0;
    for (let i = 0; i < this.hits.length; i++) {
      const hit = this.hits[i];
      if (lower <= hit && hit <= upper) {
        count++;
      }      
    }
    return count;
  }
}
