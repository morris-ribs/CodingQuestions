function valid(graph, colors) {
  const lastVertex = (colors.length - 1);
  const lastColor = colors[lastVertex];

  const coloredNeighbors = [];
  for (let i = 0; i < graph[lastVertex].length; i++) {
    const hasEdge = graph[lastVertex][i];
    if (i < lastVertex && hasEdge) {
      coloredNeighbors.push(i);
    }
  }

  for (let i = 0; i < coloredNeighbors.length; i++) {
    const neighbor = coloredNeighbors[i];
    if (colors[neighbor] === lastColor) {
      return false;
    }
  }

  return true;
}

function colorable(graph, k, colors = []) {
  if (colors.length === graph.length) {
    return true;
  }
  for (let i = 0; i < k; i++) {
    colors.push(i);
    if (valid(graph, colors)) {
      if (colorable(graph, k, colors)) {
        return true;
      }
    }
    colors.pop();
  }
  return false;
}

