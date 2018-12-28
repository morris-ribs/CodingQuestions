class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.right = null;
    this.left = null;
    this.locked = false;
  }

  isAnyChildLocked() {
    if (this.isLocked()) {
      return true;
    }    

    let isLeftLocked = false;
    if (this.left != null) {
      isLeftLocked = this.left.isAnyChildLocked();
    }

    let isRightLocked = false;
    if (this.right != null) {
      isRightLocked = this.right.isAnyChildLocked();
    }

    return isLeftLocked || isRightLocked;
  }

  canBeLocked() {
    let isParentLocked = false;
    let nodeToCheck = this.parent;
    while (nodeToCheck != null && !isParentLocked) {
      isParentLocked = nodeToCheck.isLocked();
      nodeToCheck = nodeToCheck.parent;
    }

    let isLeftLocked = false;
    if (this.left != null) {
      isLeftLocked = this.left.isAnyChildLocked();
    }

    let isRightLocked = false;
    if (this.right != null) {
      isRightLocked = this.right.isAnyChildLocked();
    }
    return !isParentLocked && !isLeftLocked && !isRightLocked;
  }

  isLocked() {
    return this.locked;
  }

  setLock(lock) {
    if (this.canBeLocked()) {
      this.locked = lock;
      return true;
    }
    return false;   
  }

  lock() {
    if (this.locked) return false;
    return this.setLock(true);
  }

  unlock() {
    return this.setLock(false);
  }
}

class Tree {
  constructor(rootData) {
    this.root = new Node(rootData);
  }

  insert(node, parent = null) {
    if (parent == null) {
      parent = this.root;
    }

    if (node.data < parent.data && parent.left) {
      this.insert(node, parent.left);
    } else if (node.data < parent.data) {
      parent.left = node;
      node.parent = parent;
    } else if (node.data > parent.data && parent.right) {
      this.insert(node, parent.right);
    } else {
      parent.right = node;
      node.parent = parent;
    }
  }
}

module.exports = { Tree, Node };