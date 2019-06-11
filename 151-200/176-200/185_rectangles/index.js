function rectangles(rec1={}, rec2={}) {
  const leftX = Math.max(rec1["topLeft"][0], rec2["topLeft"][0]);
  const rightX = Math.min(rec1["topLeft"][0]+ rec1["dimensions"][0], rec2["topLeft"][0] + rec2["dimensions"][0]);

  const topY = Math.min(rec1["topLeft"][1], rec2["topLeft"][1]);
  const bottomY = Math.max(rec1["topLeft"][1] - rec1["dimensions"][1], rec2["topLeft"][1] - rec2["dimensions"][1]);

  if (leftX > rightX || bottomY > topY) {
    return 0;
  }

  return (rightX - leftX) * (topY - bottomY);
}

const rec1 = {
  topLeft: [1, 4],
  dimensions: [3, 3]
};

const rec2 = {
  topLeft: [0, 5],
  dimensions: [4, 3] // width, height
};

console.log(rectangles(rec1, rec2)); // expected 6