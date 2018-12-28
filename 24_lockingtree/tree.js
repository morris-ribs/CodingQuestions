class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.right = null;
    this.left = null;
    this.locked = false;
  }

  canBeLocked() {
    const isParentLocked = (this.parent != null) && this.parent.isLocked();
    const isLeftLocked = (this.left != null) && this.left.isLocked();
    const isRightLocked = (this.right != null) && this.right.isLocked();

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