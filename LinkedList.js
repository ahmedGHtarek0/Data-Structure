// ==========================================
// 🔗 Singly Linked List Implementation
// ==========================================

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add node to the end (O(1))
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Add node to the beginning (O(1))
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Insert node at specific index (O(n))
  insertAt(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.prepend(value);
    if (index === this.length) return !!this.append(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  // Get node at index (O(n))
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // Remove node from beginning (O(1))
  shift() {
    if (!this.head) return undefined;
    const removedHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedHead.value;
  }

  // Remove node from end (O(n))
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      const val = this.head.value;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const val = this.tail.value;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    return val;
  }

  // Remove node at specific index (O(n))
  removeAt(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed.value;
  }

  // Remove first node with given value (O(n))
  remove(value) {
    if (!this.head) return false;
    if (this.head.value === value) {
      this.shift();
      return true;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      if (current.next === this.tail) {
        this.tail = current;
      }
      current.next = current.next.next;
      this.length--;
      return true;
    }
    return false;
  }

  // Find index of value (O(n))
  indexOf(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  // Check if value exists (O(n))
  contains(value) {
    return this.indexOf(value) !== -1;
  }

  // Reverse linked list in-place (O(n))
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  print() {
    console.log(this.toArray().join(" -> ") || "(empty)");
  }
}

// ==========================================
// 🔁 Doubly Linked List Implementation
// ==========================================

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  remove(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.length--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  printForward() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log("Forward: " + (result.join(" <-> ") || "(empty)"));
  }

  printBackward() {
    const result = [];
    let current = this.tail;
    while (current) {
      result.push(current.value);
      current = current.prev;
    }
    console.log("Backward: " + (result.join(" <-> ") || "(empty)"));
  }
}

// ==========================================
// 💡 Example Usage & Tests
// ==========================================

console.log("--- 🔗 Singly Linked List Demo ---");
const sll = new SinglyLinkedList();

sll.append(10);
sll.append(20);
sll.append(30);
sll.prepend(5);
sll.print(); // 5 -> 10 -> 20 -> 30

sll.insertAt(2, 15);
sll.print(); // 5 -> 10 -> 15 -> 20 -> 30

console.log("Removed index 0:", sll.removeAt(0)); // 5
sll.print(); // 10 -> 15 -> 20 -> 30

console.log("Contains 15?", sll.contains(15)); // true
console.log("Index of 20:", sll.indexOf(20)); // 2

console.log("Reversing list:");
sll.reverse();
sll.print(); // 30 -> 20 -> 15 -> 10

console.log("\n--- 🔁 Doubly Linked List Demo ---");
const dll = new DoublyLinkedList();
dll.append("A");
dll.append("B");
dll.append("C");
dll.prepend("Start");
dll.printForward();  // Start <-> A <-> B <-> C
dll.printBackward(); // C <-> B <-> A <-> Start

dll.remove("B");
dll.printForward();  // Start <-> A <-> C
