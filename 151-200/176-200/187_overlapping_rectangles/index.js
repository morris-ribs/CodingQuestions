function isOverlapping(rec1, rec2) {
  if (rec1["topLeft"][0] >= rec2["topLeft"][0] + rec2["dimensions"][0]) {
    return false;
  }

  if (rec1["topLeft"][0] + rec1["dimensions"][0] <= rec2["topLeft"][0]) {
    return false;
  }

  if (rec1["topLeft"][1] <= rec2["topLeft"][1] - rec2["dimensions"][1]) {
    return false;
  }

  if (rec1["topLeft"][1] - rec1["dimensions"][1] >= rec2["topLeft"][1]) {
    return false;
  }
  return true;
}

function overlapping(rectangles=[]) {
  for (let i = 0; i < rectangles.length; i++) {
    const rec1 = rectangles[i];
    const rectangles2 = rectangles.slice(i+1);
    for (let i2 = 0; i2 < rectangles2.length; i2++) {
      const rec2 = rectangles2[i2];
      if (isOverlapping(rec1, rec2)) {
        return true;
      }
    }
  }
  return false;
}

const rec1 = {
  topLeft: [1, 4],
  dimensions: [3, 3] // width, height
};
const rec2 = {
  topLeft: [-1, 3],
  dimensions: [2, 1]
};
const rec3 = {
  topLeft: [0, 5],
  dimensions: [4, 3]
};
const rectangles = [rec1, rec2, rec3];
console.log(overlapping(rectangles)); // expected true