/*Let's keep a matrix of size N by 26. A[i][j] will contain the maximum value of the path that can be made from the character i (where i will index into the alphabet, so A = 0, B = 1, etc. Then we'll use the following recurrence to keep track of the path with the largest value:

When we get to a node v, we'll do DFS on all its neighbours.
Then A[v][j] will be the maximum of all A[neighbour][j] for all its neighbours.
Then, we also need to count the current node too, so increment A[v][current_char] by one, where current_char is the current node's assigned letter. */

const VISITED = 0;
const UNVISITED = 1;
const VISITING = 2;

function maxPath(s, lst) {
  const adj = [];
  for (let index = 0; index < s.length; index++) {
    adj.push([]);    
  }
  // Build adjacency list
  for (let i = 0; i < lst.length; i++) {
    const element = lst[i];
    adj[element.u].push(element.v);
  }

  // Create matrix cache
  const dp = [];
  const state = {};
  for (let i = 0; i < s.length; i++) {
    dp.push([]);
    for (let j = 0; j < 26; j++) {
      dp[i].push(0);
    }
    state[i] = UNVISITED;
  }

  const dfs = (v) => {
    state[v] = VISITING;
    for (let i = 0; i < adj[v].length; i++) {
      const neighbour = adj[v][i];
      if (state[neighbour] === VISITING) {
        // we have a cycle
        return true;
      }
      dfs(neighbour);
      for (let i = 0; i < 26; i++) {
        dp[v][i] = dp[neighbour][i];
      }
    }

    const currentChar = (s[v].codePointAt() - 'A'.codePointAt());
    dp[v][currentChar]++;
    state[v] = VISITED;
  };

  // Run DFS on graph
  for (let i = 0; i < lst.length; i++) {
    if (state[i] == UNVISITED && dfs(i)) {
      return null;
    }
  }
  
  const nodes = dp.map(node => Math.max(...node));
  return Math.max(...nodes);
}

const edges = [{ u: 0, v: 1 }, { u: 0, v: 2 }, { u: 2, v: 3 }, { u: 3, v: 4 }];
console.log(maxPath("ABACA", edges)); // expected 3
console.log(maxPath("A", [{ u:0, v:0 }])); // expected null
