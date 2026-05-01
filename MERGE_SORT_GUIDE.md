# 🧩 Merge Sort Guide

Merge Sort is an efficient, stable, and comparison-based sorting algorithm. Most implementations produce a stable sort, meaning that the implementation preserves the input order of equal elements in the sorted output. Merge Sort is a **Divide and Conquer** algorithm.

## 🚀 How it Works
1. **Divide**: Divide the unsorted list into $n$ sublists, each containing one element.
2. **Conquer**: Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining.

## 📊 Visual Representation

```mermaid
graph TD
    A[5, 3, 8, 4, 2] --> B1[5, 3]
    A --> B2[8, 4, 2]
    
    B1 --> C1[5]
    B1 --> C2[3]
    
    B2 --> C3[8]
    B2 --> C4[4, 2]
    C4 --> D1[4]
    C4 --> D2[2]
    
    C1 & C2 --> M1[3, 5]
    D1 & D2 --> M2[2, 4]
    C3 & M2 --> M3[2, 4, 8]
    
    M1 & M3 --> Final[2, 3, 4, 5, 8]
    
    style Final fill:#4CAF50,stroke:#333,stroke-width:2px
```

## ⏱️ Complexity Analysis

| Case | Complexity |
| :--- | :--- |
| **Best Case** | O(n log n) |
| **Average Case** | O(n log n) |
| **Worst Case** | O(n log n) |
| **Space Complexity** | O(n) |

## 💻 Implementation Snippet

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
```

---
[⬅️ Back to Main README](README.md)
