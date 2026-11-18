// ==========================================
// 🌲 Binary Search Tree (BST) Implementation
// ==========================================

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

  // Insert value into the BST (O(log n) avg, O(n) worst)
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined; // Duplicates not inserted

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Search for value in BST (O(log n) avg, O(n) worst)
  contains(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // Find minimum value node in subtree
  findMinNode(node = this.root) {
    if (!node) return null;
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  // Find maximum value node in subtree
  findMaxNode(node = this.root) {
    if (!node) return null;
    let current = node;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  // Remove value from BST (O(log n) avg, O(n) worst)
  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      // Case 1: Leaf node (no children)
      if (!node.left && !node.right) {
        return null;
      }

      // Case 2: Node has only one child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Case 3: Node has two children
      // Find in-order successor (smallest in right subtree)
      const successor = this.findMinNode(node.right);
      node.value = successor.value;
      node.right = this._removeNode(node.right, successor.value);
      return node;
    }
  }

  // ------------------------------------------
  // 🔄 Tree Traversals
  // ------------------------------------------

  // In-Order Traversal (Left -> Root -> Right) => Sorted Order!
  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // Pre-Order Traversal (Root -> Left -> Right)
  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  // Post-Order Traversal (Left -> Right -> Root)
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  // Level-Order Traversal (Breadth-First Search)
  levelOrder() {
    const result = [];
    if (!this.root) return result;

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }

  // Compute height of the tree
  height(node = this.root) {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  // Check if tree is balanced
  isBalanced(node = this.root) {
    if (!node) return true;
    const diff = Math.abs(this.height(node.left) - this.height(node.right));
    return diff <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  // Visual printer for tree
  printPretty(node = this.root, prefix = "", isLeft = true) {
    if (!node) return;
    if (node.right) {
      this.printPretty(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left) {
      this.printPretty(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}

// ==========================================
// 💡 Example Usage & Tests
// ==========================================

const bst = new BinarySearchTree();

// Inserting values:
//          50
//        /    \
//       30     70
//      /  \   /  \
//     20  40 60  80
[50, 30, 70, 20, 40, 60, 80].forEach(val => bst.insert(val));

console.log("--- 🌲 Binary Search Tree Visual ---");
bst.printPretty();

console.log("\n--- 🔍 Search Operations ---");
console.log("Contains 40?", bst.contains(40)); // true
console.log("Contains 99?", bst.contains(99)); // false
console.log("Min value:", bst.findMinNode()?.value); // 20
console.log("Max value:", bst.findMaxNode()?.value); // 80
console.log("Tree Height:", bst.height()); // 2
console.log("Is Balanced?", bst.isBalanced()); // true

console.log("\n--- 🔄 Tree Traversals ---");
console.log("In-Order (Sorted):   ", bst.inOrder());   // [20, 30, 40, 50, 60, 70, 80]
console.log("Pre-Order:           ", bst.preOrder());  // [50, 30, 20, 40, 70, 60, 80]
console.log("Post-Order:          ", bst.postOrder()); // [20, 40, 30, 60, 80, 70, 50]
console.log("Level-Order (BFS):   ", bst.levelOrder());// [50, 30, 70, 20, 40, 60, 80]

console.log("\n--- 🗑️ Removal Demo ---");
console.log("Removing 20 (leaf)...");
bst.remove(20);
console.log("Removing 30 (node with one child remaining)...");
bst.remove(30);
console.log("Removing 50 (root with two children)...");
bst.remove(50);
console.log("In-Order after removals:", bst.inOrder()); // [40, 60, 70, 80]
bst.printPretty();
