class Queue {
  constructor() {
    this.items = [];
  }

  // enqueue → add to back
  enqueue(element) {
    this.items.push(element);
  }

  // dequeue → remove from front
  dequeue() {
    if (this.items.length === 0) return "Queue is empty";
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

// Example
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print(); // [10, 20, 30]

console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
//FIFO