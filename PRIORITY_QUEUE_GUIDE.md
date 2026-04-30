# 👑 Priority Queue Data Structure

A **Priority Queue** is a special type of queue where each element is associated with a **priority**. Elements with higher priority are served before elements with lower priority.

## ⚙️ How it Works

Unlike a standard queue, elements are inserted based on their priority level.

### Visual Representation

```mermaid
graph LR
    subgraph Sorted_By_Priority
    item1["Value: High Task<br/>Priority: 3"]
    item2["Value: Medium Task<br/>Priority: 2"]
    item3["Value: Low Task<br/>Priority: 1"]
    end
    
    New["New Task<br/>Priority: 2.5"] -- Insert --> item1
    item1 -- 1st Out --> Poll((Poll))
    
    style item1 fill:#FF5252,color:#fff
    style item2 fill:#FFD740
    style item3 fill:#BDBDBD
    style Poll fill:#E57373
```

## 🚀 Operations

| Method | Description | Complexity |
| :--- | :--- | :--- |
| `enqueue(val, priority)` | Inserts element in sorted order. | O(n) |
| `poll()` | Removes and returns highest priority element. | O(1) |
| `peek()` | Returns highest priority element. | O(1) |

## 💻 Implementation Snippet

```javascript
enqueue(value, priority) {
  const element = { value, priority };
  let added = false;

  for (let i = 0; i < this.items.length; i++) {
    if (element.priority > this.items[i].priority) {
      this.items.splice(i, 0, element);
      added = true;
      break;
    }
  }

  if (!added) this.items.push(element);
}
```

[⬅️ Back to README](README.md)
