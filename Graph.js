// ==========================================
// 🕸️ Graph Implementation (Adjacency List)
// ==========================================

class Graph {
  constructor() {
    // Map to hold vertex -> Set/Array of neighbors
    this.adjacencyList = {};
  }

  // Add a new vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge between two vertices
  addEdge(v1, v2, isDirected = false) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);

    if (!this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1].push(v2);
    }

    if (!isDirected && !this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2].push(v1);
    }
  }

  // Remove an edge between two vertices
  removeEdge(v1, v2, isDirected = false) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    }
    if (!isDirected && this.adjacencyList[v2]) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
  }

  // Remove a vertex and all its connected edges
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    // Remove all edges referencing this vertex
    for (const adjacentVertex in this.adjacencyList) {
      this.removeEdge(adjacentVertex, vertex, true);
    }

    delete this.adjacencyList[vertex];
  }

  // Check if edge exists
  hasEdge(v1, v2) {
    return !!(this.adjacencyList[v1] && this.adjacencyList[v1].includes(v2));
  }

  // Get neighboring vertices
  getNeighbors(vertex) {
    return this.adjacencyList[vertex] || [];
  }

  // ------------------------------------------
  // 🔄 Graph Traversals
  // ------------------------------------------

  // Breadth-First Search (BFS) using a Queue
  bfs(startVertex) {
    if (!this.adjacencyList[startVertex]) return [];

    const result = [];
    const visited = {};
    const queue = [startVertex];
    visited[startVertex] = true;

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      const neighbors = this.adjacencyList[currentVertex] || [];
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  // Depth-First Search (DFS) - Recursive
  dfsRecursive(startVertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex || !adjacencyList[vertex]) return;
      visited[vertex] = true;
      result.push(vertex);

      for (const neighbor of adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
    }

    dfs(startVertex);
    return result;
  }

  // Depth-First Search (DFS) - Iterative using a Stack
  dfsIterative(startVertex) {
    if (!this.adjacencyList[startVertex]) return [];

    const result = [];
    const visited = {};
    const stack = [startVertex];
    visited[startVertex] = true;

    while (stack.length > 0) {
      const currentVertex = stack.pop();
      result.push(currentVertex);

      const neighbors = this.adjacencyList[currentVertex] || [];
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }

    return result;
  }

  // ------------------------------------------
  // 📍 Applications: Shortest Path (Unweighted BFS)
  // ------------------------------------------

  shortestPath(start, target) {
    if (!this.adjacencyList[start] || !this.adjacencyList[target]) return null;
    if (start === target) return [start];

    const visited = {};
    const previous = {};
    const queue = [start];
    visited[start] = true;

    let found = false;

    while (queue.length > 0) {
      const current = queue.shift();
      if (current === target) {
        found = true;
        break;
      }

      for (const neighbor of this.adjacencyList[current] || []) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          previous[neighbor] = current;
          queue.push(neighbor);
        }
      }
    }

    if (!found) return null; // No path found

    // Reconstruct path from target to start
    const path = [];
    let curr = target;
    while (curr) {
      path.unshift(curr);
      curr = previous[curr];
    }
    return path;
  }

  printGraph() {
    console.log("--- Graph Adjacency List ---");
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
    }
  }
}

// ==========================================
// 💡 Example Usage & Tests
// ==========================================

const g = new Graph();

// Creating vertices and edges
//       A --- B
//       |     |
//       C --- D
//       \     /
//          E
["A", "B", "C", "D", "E"].forEach(v => g.addVertex(v));
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");

g.printGraph();

console.log("\n--- 🧭 Traversals ---");
console.log("BFS starting from 'A':", g.bfs("A"));
console.log("DFS (Recursive) from 'A':", g.dfsRecursive("A"));
console.log("DFS (Iterative) from 'A':", g.dfsIterative("A"));

console.log("\n--- 📍 Shortest Path (BFS) ---");
console.log("Shortest path from 'A' to 'E':", g.shortestPath("A", "E"));

console.log("\n--- 🗑️ Edge / Vertex Removal ---");
console.log("Removing edge between 'A' and 'B'...");
g.removeEdge("A", "B");
console.log("Has edge A-B?", g.hasEdge("A", "B")); // false

console.log("Removing vertex 'C'...");
g.removeVertex("C");
g.printGraph();
