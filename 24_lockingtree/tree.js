class Node {
  constructor(data, left = null, right = null, parent = null) {
    this.data = data;
    this.parent = parent;
    this.right = right;
    this.left = left;
    this.locked = false;
    this.lockedDescendantsCount = 0;
  }

  canBeLocked() {
    if (this.lockedDescendantsCount > 0) {
      return false;
    }
    let current = this.parent;
    while (current != null) {
      if (current.locked) {
        return false;
      }
      current = current.parent;
    }
    return true;
  }

  isLocked() {
    return this.locked;
  }

  setLock(lock) {
    if (this.locked === lock) {
      return false; // node already locked/unlocked
    }
    if (!this.canBeLocked()) {
      return false;
    }

    this.locked = lock;
    let current = this.parent;
    while (current != null) {
      if (lock) {
        current.lockedDescendantsCount++;
      } else {
        current.lockedDescendantsCount--;
      }
      current = current.parent;
    }
    return true;
  }

  lock() {
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