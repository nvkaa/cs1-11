class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    search(value) {
      return this._searchNode(this.root, value);
    }
  
    _searchNode(node, value) {
      if (node === null) {
        return false;
      }
      if (value < node.value) {
        return this._searchNode(node.left, value);
      } else if (value > node.value) {
        return this._searchNode(node.right, value);
      } else {
        return true;
      }
    }

    inOrderTraversal(node = this.root) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
}

export { TreeNode, BinarySearchTree };
// module.exports = { TreeNode, BinarySearchTree };