# 🛡️ Hashing and Collision Resolution

Hashing is the process of mapping data of arbitrary size to fixed-size values (hash codes) using a **Hash Function**.

## 🔑 The Hash Function
In our implementations, we use the **Modulo Operator**:
`index = h(Key) = Key % Size`

---

## ⚠️ Collisions
A collision occurs when two different keys produce the same hash index. 
**Example:** `h(3) = 3 % 10 = 3` and `h(13) = 13 % 10 = 3`. Both want to sit at index **3**.

---

## 🛠️ Collision Resolution Methods

### 1. Replacement
The simplest (but destructive) method. The new value simply overwrites the old value at that index.

```mermaid
graph LR
    subgraph Hash Table
    T3[Index 3: 3]
    end
    K13((Key 13)) -- "h(13)=3" --> T3
    T3 -- "Overwrite" --> T3_New[Index 3: 13]
```

---

### 2. Open Addressing
When a collision occurs, we look for another empty slot in the table.

#### A. Linear Probing
We search for the next available slot sequentially.
**Formula:** `index = (h(Key) + i) % Size`

```mermaid
graph TD
    subgraph Table
    I3[3: Key 3]
    I4[4: Empty]
    I5[5: Empty]
    end
    K13((Key 13)) -- "h(13)=3 (Full)" --> I3
    I3 -- "i=1" --> I4
    I4 -- "Place 13 here" --> I4
```

#### B. Quadratic Probing
We "jump" using a quadratic function to reduce clustering.
**Formula:** `index = (h(Key) + i²) % Size`

```mermaid
graph TD
    subgraph Table
    I3[3: Key 3]
    I4[4: Key 13]
    I5[5: Empty]
    I6[6: Empty]
    I7[7: Empty]
    end
    K23((Key 23)) -- "h(23)=3 (Full)" --> I3
    I3 -- "i=1 (3+1=4 Full)" --> I4
    I4 -- "i=2 (3+4=7)" --> I7
    I7 -- "Place 23 here" --> I7
```

---

### 3. Chaining (Open Hashing)
Instead of finding a new slot, each slot in the table holds a list (or bucket). Multiple keys can coexist at the same index.

```mermaid
graph LR
    subgraph Table
    I3[Index 3]
    I8[Index 8]
    end
    I3 --> B3[3] --> B13[13]
    I8 --> B8[8]
```

---

## 🚀 Complexity Analysis

| Method | Best Case | Worst Case (Full/Clustered) |
| :--- | :--- | :--- |
| **Search** | O(1) | O(n) |
| **Insertion** | O(1) | O(n) |
| **Deletion** | O(1) | O(n) |

---

## 👨‍💻 Author
**Ahmed GH Tarek**  
[GitHub Profile](https://github.com/ahmedGHtarek0)
