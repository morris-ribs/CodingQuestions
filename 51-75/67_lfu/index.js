class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.valMap = {};
    this.freqMap = {};
    this.minFreq = 0;
  }

  get(key) {
    // If key doesn't exist, return null.
    if (typeof(this.valMap[key]) === "undefined") {
      return null;
    }
    // First, we look up the val and frequency in our valMap.
    const obj = this.valMap[key];

    // We need to then increment the frequency of our key,
    //    so we'll take it out of the current bucket and put it
    //    into the next frequency's bucket. If it was the last thing
    //    in the current bucket and the lowest frequency, (e.g. 1 to 2),
    //    then we'll make sure to update our min_freq so we can keep
    //    track of what to evict. 
    
    const ind = this.freqMap[obj.freq].indexOf(k => k === key);
    this.freqMap[obj.freq].splice(ind, 1);
    if (!this.freqMap[obj.freq] || this.freqMap[obj.freq].length === 0) {
      delete this.freqMap[obj.freq];
      if (this.minFreq === obj.freq) {
        this.minFreq++;
      }
    }

    // Update our dicts as usual.
    obj.freq++;
    this.valMap[key] = obj;
    if (typeof this.freqMap[obj.freq] === "undefined") {
      this.freqMap[obj.freq] = [];
    }
    this.freqMap[obj.freq].push(key);
    return obj.val;
  }

  set(key, val) {
    if (this.capacity === 0) {
      return;
    }

    if (typeof(this.valMap[key]) === "undefined") {
      // Evict the least frequently used key by popping left
      // from the lowest-frequency key, since it's ordered by
      if (Object.keys(this.valMap).length >= this.capacity) {
        const toEvict = this.freqMap[this.minFreq].splice(0, 1);
        if (!this.freqMap[this.minFreq] || this.freqMap[this.minFreq].length === 0) {
          delete this.freqMap[this.minFreq];
        }
        delete this.valMap[toEvict];
      }

      // Add our key to val_map and freqMap
      this.valMap[key] = { val: val, freq: 1 };
      if (typeof this.freqMap[1] === "undefined") {
        this.freqMap[1] = [];
      }

      this.freqMap[1].push(key);
      this.minFreq = 1;
    } else {
      // Update the entry and increase the frequency of the key,
      // updating the minimum frequency if necessary.
      const obj = this.valMap[key];
      const ind = this.freqMap[obj.freq].indexOf(k => k === key);
      this.freqMap[obj.freq].splice(ind, 1);
      if (!this.freqMap[obj.freq] || this.freqMap[obj.freq].length === 0) {
        if (this.minFreq === obj.freq) {
          this.minFreq++;
        }
        delete this.freqMap[obj.freq];
      }
      obj.freq++;
      this.valMap[key] = obj;      
      if (typeof this.freqMap[obj.freq] === "undefined") {
        this.freqMap[obj.freq] = [];
      }
      this.freqMap[obj.freq].push(key);
    }
  }
}

const lfu = new LFUCache(5);
lfu.set("Key1", 1);
lfu.set("Key2", 2);
lfu.set("Key3", 3);
console.log(lfu.get("Key1"));
console.log(lfu.get("Key2"));
console.log(lfu.get("Key3"));
console.log(lfu.get("Key4")); // null