# 📏 Dynamic Array Guide

A Dynamic Array is a random-access, variable-size list data structure that allows elements to be added or removed. In JavaScript, the built-in `Array` is dynamic by default.

## 🚀 How it Works
1. **Initial Capacity**: The array starts with a certain capacity.
2. **Growth**: When the array is full, it automatically resizes (usually doubling its size) to accommodate new elements.
3. **Random Access**: Elements can be accessed instantly using their index.

## 📊 Visual Representation

```mermaid
graph LR
    subgraph Memory Layout
    A[10] --- B[20] --- C[30] --- D[Empty] --- E[Empty]
    end
    
    Push[Push 40] --> Grow{Capacity Check}
    Grow -->|Full?| Resize[Double Size]
    Grow -->|Available| Insert[Add to Index 3]
    
    Insert --> F[10, 20, 30, 40, Empty]
    
    style F fill:#4CAF50,stroke:#333,stroke-width:2px
```

## ⏱️ Complexity Analysis

| Operation | Complexity |
| :--- | :--- |
| **Access** | O(1) |
| **Search** | O(n) |
| **Insertion (End)** | Amortized O(1) |
| **Deletion (End)** | O(1) |
| **Insertion (Middle)** | O(n) |

## 💻 Implementation Snippet

```javascript
let arr = []; // JavaScript arrays are dynamic

arr.push(10); // O(1)
arr.push(20);
arr.pop();    // O(1)
```

---
[⬅️ Back to Main README](README.md)
