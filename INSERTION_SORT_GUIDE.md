# 🃏 Insertion Sort Guide

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## 🚀 How it Works
1. Assume the first element is already sorted.
2. Pick the next element and compare it with the sorted part.
3. Shift all elements in the sorted part that are larger than the picked element to the right.
4. Insert the picked element into its correct position.
5. Repeat until the array is fully sorted.

## 📊 Visual Representation

```mermaid
graph LR
    subgraph Iteration 1
    I1["5, |3, 8, 4, 2"] -->|Insert 3| I2["3, 5, |8, 4, 2"]
    end
    subgraph Iteration 2
    I2 -->|Insert 8| I3["3, 5, 8, |4, 2"]
    end
    subgraph Iteration 3
    I3 -->|Insert 4| I4["3, 4, 5, 8, |2"]
    end
    subgraph Iteration 4
    I4 -->|Insert 2| I5["2, 3, 4, 5, 8"]
    end
    
    style I5 fill:#4CAF50,stroke:#333,stroke-width:2px
```

## ⏱️ Complexity Analysis

| Case | Complexity |
| :--- | :--- |
| **Best Case** | O(n) (Already sorted) |
| **Average Case** | O(n²) |
| **Worst Case** | O(n²) |
| **Space Complexity** | O(1) (In-place sorting) |

## 💻 Implementation Snippet

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
```

---
[⬅️ Back to Main README](README.md)
