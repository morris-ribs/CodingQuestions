
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

/*
  - Find the root by looking at the first element in the preorder traversal
  - Find out how many elements are in the left subtree and right subtree by searching for the index of the root in the inorder traversal
  - Recursively reconstruct the left subtree and right subtree 
*/
function reconstruct(preorder, inorder) {
  const preorderLength = preorder.length;
  const inorderLength = inorder.length;
  if (preorderLength === 0 && inorderLength === 0) {
    return null;
  }

  if (preorderLength === 1 && inorderLength === 1) {
    return new Node(preorder[0]);
  }

  const root = new Node(preorder[0]);
  const root_i = inorder.findIndex(elem => elem === root.data);
  root.left = reconstruct(preorder.slice(1, (1 + root_i)), inorder.slice(0, root_i));
  root.right = reconstruct(preorder.slice(1 + root_i), inorder.slice(root_i + 1));
  return root;
}

console.log(reconstruct(["a", "b", "d", "e", "c", "f", "g"], ["d", "b", "e", "a", "f", "c", "g"]));