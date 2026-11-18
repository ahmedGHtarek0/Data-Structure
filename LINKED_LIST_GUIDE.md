# 🔗 Linked List Data Structure

A **Linked List** is a linear data structure where elements (called **nodes**) are not stored at contiguous memory locations. Instead, each node contains a **data value** and a **pointer (or reference)** to the next node in the sequence.

---

## ⚙️ How it Works

Unlike arrays where elements are stored contiguously and resized dynamically, linked lists allocate memory dynamically for each node independently.

### 1. Singly Linked List
Each node points only to the next node. The last node points to `null`.

```mermaid
graph LR
    Head([Head]) --> Node1
    subgraph Singly_Linked_List
        Node1["[ Val: 10 | Next ]"] --> Node2["[ Val: 20 | Next ]"]
        Node2 --> Node3["[ Val: 30 | Next ]"]
        Node3 --> NullNode["null"]
    end
    Tail([Tail]) --> Node3

    style Head fill:#81C784,stroke:#333
    style Tail fill:#E57373,stroke:#333
    style NullNode fill:#ddd,stroke:#999
    style Node1 fill:#fff,stroke:#333
    style Node2 fill:#fff,stroke:#333
    style Node3 fill:#fff,stroke:#333
```

### 2. Doubly Linked List
Each node maintains two references: one pointing forward to `next`, and one pointing backward to `prev`.

```mermaid
graph LR
    subgraph Doubly_Linked_List
        D1["[ Prev | Val: A | Next ]"] <--> D2["[ Prev | Val: B | Next ]"]
        D2 <--> D3["[ Prev | Val: C | Next ]"]
    end

    style D1 fill:#E1F5FE,stroke:#0288D1
    style D2 fill:#E1F5FE,stroke:#0288D1
    style D3 fill:#E1F5FE,stroke:#0288D1
```

---

## ⚖️ Array vs Linked List Comparison

| Feature | Dynamic Array | Linked List |
| :--- | :--- | :--- |
| **Access by Index (`O(1)`)** | ✅ Direct index math | ❌ Requires O(n) traversal |
| **Insertion / Deletion at Start** | ❌ O(n) due to shifting | ✅ O(1) by updating head |
| **Insertion / Deletion at End** | ✅ Amortized O(1) | ✅ O(1) (with tail pointer) |
| **Memory Allocation** | Contiguous chunk | Dispersed nodes with pointer overhead |
| **Dynamic Resizing** | Reallocates and copies array | Creates node on demand |

---

## 🚀 Operations & Complexity

| Method | Description | Time Complexity | Space Complexity |
| :--- | :--- | :--- | :--- |
| `prepend(value)` | Inserts node at the head of the list. | **O(1)** | O(1) |
| `append(value)` | Appends node at the tail of the list. | **O(1)** | O(1) |
| `insertAt(index, val)` | Inserts node at a given index. | **O(n)** | O(1) |
| `shift()` | Removes the head node. | **O(1)** | O(1) |
| `pop()` | Removes the tail node (Singly). | **O(n)** | O(1) |
| `remove(value)` | Removes node with target value. | **O(n)** | O(1) |
| `get(index)` | Retrieves node at index. | **O(n)** | O(1) |
| `reverse()` | Reverses the list in-place. | **O(n)** | O(1) |

---

## 💻 Implementation Snippet

```javascript
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
  }

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
  }
}
```

---

[⬅️ Back to README](README.md)

## 👨‍💻 Author
**Ahmed GH Tarek**  
[GitHub Profile](https://github.com/ahmedGHtarek0)
