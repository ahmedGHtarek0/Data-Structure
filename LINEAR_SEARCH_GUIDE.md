# 🔍 Linear Search Guide

Linear Search is the simplest search algorithm. It transitions through the collection sequentially, checking each element until a match is found or the end of the collection is reached.

## 🚀 How it Works
1. Start from the leftmost element of the array.
2. Compare the target value with each element.
3. If the target matches an element, return the index.
4. If the target is not found after checking all elements, return `-1`.

## 📊 Visual Representation

```mermaid
graph LR
    Start((Start)) --> I0[Index 0: 1]
    I0 -->|Check| C0{1 == 5?}
    C0 -->|No| I1[Index 1: 2]
    I1 -->|Check| C1{2 == 5?}
    C1 -->|No| I2[Index 2: 3]
    I2 -->|Check| C2{3 == 5?}
    C2 -->|No| I3[Index 3: 4]
    I3 -->|Check| C3{4 == 5?}
    C3 -->|No| I4[Index 4: 5]
    I4 -->|Check| C4{5 == 5?}
    C4 -->|Yes| Found((Found Index 4))
    
    style Found fill:#4CAF50,stroke:#333,stroke-width:2px
    style C4 fill:#4CAF50,stroke:#333,stroke-width:2px
```

## ⏱️ Complexity Analysis

| Case | Complexity |
| :--- | :--- |
| **Best Case** | O(1) (Target is at the first position) |
| **Average Case** | O(n) |
| **Worst Case** | O(n) (Target is at the last position or not present) |
| **Space Complexity** | O(1) (No extra space used) |

## 💻 Implementation Snippet

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
```

---
[⬅️ Back to Main README](README.md)
