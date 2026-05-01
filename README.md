# 🚀 Data Structures in JavaScript

Welcome to the **Data Structures** repository! This project contains clean, efficient, and well-documented implementations of fundamental data structures using JavaScript.

![DSA Banner](dsa_banner_1777563755685.png)

## 📂 Project Structure

This repository provides clear implementations for the following structures:

| Data Structure / Algorithm | Description | Documentation |
| :--- | :--- | :--- |
| **Stack** | LIFO (Last-In, First-Out) implementation. | [View Guide](STACK_GUIDE.md) |
| **Queue** | FIFO (First-In, First-Out) implementation. | [View Guide](QUEUE_GUIDE.md) |
| **Priority Queue** | Element-based priority sorting implementation. | [View Guide](PRIORITY_QUEUE_GUIDE.md) |
| **Linear Search** | Sequential search through a collection. | [View Guide](LINEAR_SEARCH_GUIDE.md) |
| **Binary Search** | Efficient search for sorted collections. | [View Guide](BINARY_SEARCH_GUIDE.md) |

---

## 🛠️ Getting Started

To explore the implementations, simply clone the repository and run the scripts using Node.js.

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Usage
```bash
# Run Search Algorithms
node LinearSearch.js
node BinarySearch.js

# Run Data Structures
node stack.js
node queue.js
node priorityQueue.js
```

---

## 📊 Overview Diagram

```mermaid
graph TD
    DSA[DSA Project] --> Search[Search Algorithms]
    DSA --> DS[Data Structures]
    
    Search --> LS[Linear Search]
    Search --> BS[Binary Search]
    
    DS --> Linear[Linear Structures]
    Linear --> S[Stack - LIFO]
    Linear --> Q[Queue - FIFO]
    Q --> PQ[Priority Queue]
    
    style DSA fill:#f9f,stroke:#333,stroke-width:4px
    style LS fill:#ffd,stroke:#333,stroke-width:2px
    style BS fill:#ffd,stroke:#333,stroke-width:2px
    style S fill:#bbf,stroke:#333,stroke-width:2px
    style Q fill:#bbf,stroke:#333,stroke-width:2px
    style PQ fill:#dfd,stroke:#333,stroke-width:2px
```

---

## 👨‍💻 Author
**Ahmed GH Tarek**  
[GitHub Profile](https://github.com/ahmedGHtarek0)
