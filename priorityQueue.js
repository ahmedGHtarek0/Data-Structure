class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // element = { value, priority }
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

    if (!added) {
      this.items.push(element);
    }
  }

  // poll → remove highest priority
  poll() {
    if (this.items.length === 0) return "Queue is empty";
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  print() {
    console.log(this.items);
  }
}

// Example
const pq = new PriorityQueue();

pq.enqueue("Low task", 1);
pq.enqueue("High task", 3);
pq.enqueue("Medium task", 2);

pq.print();
/*
[
  { value: 'High task', priority: 3 },
  { value: 'Medium task', priority: 2 },
  { value: 'Low task', priority: 1 }
]
*/

console.log(pq.poll()); // { value: 'High task', priority: 3 } // print and after that  remove 
pq.print(); /*
[
 { value: 'Medium task', priority: 2 },
  { value: 'Low task', priority: 1 }
]
*/
//FIFO