const T = require('./node');
const Node = T.Node;

function serialize(node) {  
  if (node == null || typeof node === "undefined") {
    return "#EMPTY#";
  }

  return (node.val || "") + "," + serialize(node.left)  + "," + serialize(node.right);
}

function stringToNode(nodeAsString) {
  if (nodeAsString.length > 0) {
    const currentNodeAsString = nodeAsString.splice(0, 1)[0];
    if (currentNodeAsString === "#EMPTY#") {
      return null;
    }
    const node = new Node(currentNodeAsString, stringToNode(nodeAsString), stringToNode(nodeAsString));  
    return node;
  }
}

function deserialize(nodeAsString) {
  if (typeof nodeAsString === "string") {
    const arrayOfNodes = nodeAsString.split(",");
    const tree = stringToNode(arrayOfNodes);
    return tree;
  }
  return "";
}

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
console.log(deserialize(serialize(node)).left.left.val);

const node2 = new Node('1', new Node('2', new Node('4', new Node('6')), new Node('5')), new Node('3'));
console.log(deserialize(serialize(node2)));
console.log(deserialize(serialize(node2)).left.left.left);
console.log(serialize(node2));

module.exports = {serialize, deserialize};
