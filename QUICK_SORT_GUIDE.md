# ⚡ Quick Sort Guide

Quick Sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.

## 🚀 How it Works
1. **Pick Pivot**: Select an element from the array (often the last element).
2. **Partition**: Reorder the array so all elements < pivot are on the left, and all > pivot are on the right.
3. **Recursion**: Recursively apply the above steps to the sub-arrays.

## 📊 Visual Representation

```mermaid
graph TD
    A[5, 3, 8, 4, 2] -->|Pivot: 2| B[Left: Empty]
    A -->|Pivot: 2| C[Right: 5, 3, 8, 4]
    C -->|Pivot: 4| D[Left: 3]
    C -->|Pivot: 4| E[Right: 5, 8]
    E -->|Pivot: 8| F[Left: 5]
    E -->|Pivot: 8| G[Right: Empty]
    
    Final[2, 3, 4, 5, 8]
    style Final fill:#4CAF50,stroke:#333,stroke-width:2px
```

## ⏱️ Complexity Analysis

| Case | Complexity |
| :--- | :--- |
| **Best Case** | O(n log n) |
| **Average Case** | O(n log n) |
| **Worst Case** | O(n²) (Poor pivot choice) |
| **Space Complexity** | O(log n) (Recursive stack) |

## 💻 Implementation Snippet

```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [], right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

---
[⬅️ Back to Main README](README.md)
