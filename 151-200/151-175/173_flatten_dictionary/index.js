function flatten(d={}, separator='.') {
  const newDict = {};
  Object.keys(d).map(key => {
    const val = d[key];
    if (typeof val === "object") {
      const flattenedSubdict = flatten(val);
      Object.keys(flattenedSubdict).map(flatKey => {
        const flatVal = flattenedSubdict[flatKey];
        newDict[key + separator + flatKey] = flatVal;
      });
    } else {
      newDict[key] = val;
    }
  });
  return newDict;
}

console.log(flatten({ 
  "key": 3,
  "foo": {
    "a": 5,
    "bar": {
      "baz": 8
    }
  }
}, '.'));