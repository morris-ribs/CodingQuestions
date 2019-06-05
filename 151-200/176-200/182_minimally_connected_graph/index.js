/*
Suppose we have a graph that is not minimally-connected. That means that there exists an edge (u, v) in the graph that, if we remove it, would still have a path from u to v. This means that there must be a cycle in the graph along u and v. Conversely, if there is no cycle, then the graph is minimally-connected. We can run DFS on the graph to detect a cycle, and return false if there is one.

However, an easier way to look at this is to simply notice that each vertex must have exactly one edge coming from it, which means that there must be n - 1 edges in the graph. So we can also simply count up the number of edges in the graph and check if it's equal to n - 1.
*/
function minimallyConnectedGraph(graph=[]) {
  const n = graph.length;
  let numEdges = 0;
  for (let i = 0; i < graph.length; i++) {
    const edges = graph[i];
    numEdges += edges.length;
  }
  numEdges = Math.floor(numEdges/2);
  return (n-1) === numEdges;
}
