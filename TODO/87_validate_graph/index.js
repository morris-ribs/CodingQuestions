const N = 0;
const E = 1;
const S = 2;
const W = 3;

const charToDir = [{ 'N': N }, {'E': E}, {'S': S}, {'W': W}];

class Node {
  constructor(val) {
    this.val = val;
    this.edges = [{}, {}, {}, {}];
  }
}


function validate(rules = []) {
  const map = {};
  for (let i = 0; i < rules.length; i++) {
    const line = rules[i];
    const rule = line.split(" ");
    console.log("Rule " + rule[0] + " " + rule[1] + " " + rule[2]);
    let fromVal = rule[2][0];
    let toVal = rule[0][0];
    if (typeof map[fromVal] === "undefined") {
      const n = new Node(fromVal);
      map[fromVal] = n;
    }
    
    if (typeof map[toVal] === "undefined") {
      const n = new Node(toVal);
      map[toVal] = n;
    }
  }

  const from = map[fromVal];
  const to = map[toVal];
  for (let j = 0; j < rule[1].length; j++) {
    const dirChar = rule[1][j];
    const dir = charToDir[dirChar];
  }
//       /* Decompose diagonal (two-char) directions to single directions */
//       for (char dirChar : rule[1].toCharArray()) {
//         int dir = charToDir.get(dirChar);
//         if (!isValid(map, from, to, dir))
//           return false;
//         addEdges(map, from, to, dir);
//         System.out.println(from.edges.get(dir));
//          System.out.println(to.edges.get(opposite(dir)));
//       }

//     }

//     return true;
}

// class Solution {
//   public static void main(String[] args) {
//     test1();
//     test2();
//     test3();
//   }

//   private static void test1() {
//     String[] rules = {"A N B",
//                       "C SE B",
//                       "C N A"};
//     System.out.println(validate(rules));
//   }

//   private static void test2() {
//     String[] rules = {"A NW B",
//                       "A N B"};
//     System.out.println(validate(rules));
//   }

//   private static void test3() {
//     String[] rules = {"A N B",
//                       "C N B"};
//     System.out.println(validate(rules));
//   }



//   public static final int N = 0;
//   public static final int E = 1;
//   public static final int S = 2;
//   public static final int W = 3;
//   public static final int[] DIRS = {N, E, S, W};
//   public static final Map<Character, Integer> charToDir = new HashMap<>();;
//   static {
//     charToDir.put('N', N);
//     charToDir.put('E', E);
//     charToDir.put('S', S);
//     charToDir.put('W', W);
//   }

//   public static boolean validate(String[] rules) {
//     Map<Character, Node> map = new HashMap<>();

//     for (String line : rules) {
//       String[] rule = line.split(" ");
//       System.out.println("Rule " + rule[0] + " " + rule[1] + " " + rule[2]);
//       char fromVal = rule[2].charAt(0);
//       char toVal = rule[0].charAt(0);

//       if (!map.containsKey(fromVal)) {
//         Node n = new Node(fromVal);
//         map.put(fromVal, n);
//       }

//       if (!map.containsKey(toVal)) {
//         Node n = new Node(toVal);
//         map.put(toVal, n);
//       }

//       Node from = map.get(fromVal);
//       Node to = map.get(toVal);

//       /* Decompose diagonal (two-char) directions to single directions */
//       for (char dirChar : rule[1].toCharArray()) {
//         int dir = charToDir.get(dirChar);
//         if (!isValid(map, from, to, dir))
//           return false;
//         addEdges(map, from, to, dir);
//         System.out.println(from.edges.get(dir));
//          System.out.println(to.edges.get(opposite(dir)));
//       }

//     }

//     return true;
//   }

function opposite(dir) {
  return (dir + 2) % 4;
}

// function isValid(map, from, to, newDir) {
//     const oppositeDir = opposite(newDir);
//     if (from.edges.get(oppositeDir).contains(to))
//           return false;

//     return true;
//   }

//   private static void addEdges(Map<Character, Node> map,
//                                   Node from,
//                                   Node to,
//                                   int newDir) {
//     /* Get the direct opposite direction, e.g. S from N */
//     int oppositeDir = opposite(newDir);

//     /* Add the immediate edge between the nodes, using bi-directional edges. */
//     from.edges.get(newDir).add(to);
//     to.edges.get(oppositeDir).add(from);

//     for (int dir : DIRS) {
//       /* Relationships in the same direction are ambiguous.
//          For example, if A is north of B, and we are adding 
//          C north of B, we cannot say C is north of A. */
//       if (dir == newDir)
//         continue;

//       for (Node neighbor : from.edges.get(dir)) {
//         /* No need to add self-edges */
//         if (neighbor == to)
//           continue;
//         /* Add bi-directional edges */
//         neighbor.edges.get(newDir).add(to);
//         to.edges.get(oppositeDir).add(neighbor);
//       }
//     }
//   }
// }