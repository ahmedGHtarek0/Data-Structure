class HashTableReplacement {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  _hash(key) {
    return key % this.size;
  }

  set(key, value) {
    const index = this._hash(key);
    // ⚠️ Replacement Method: Overwrites existing value on collision
    this.table[index] = [key, value];
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index][0] === key) {
      return this.table[index][1];
    }
    return undefined;
  }

  print() {
    console.log("--- HashTable (Replacement) ---");
    console.log(this.table);
  }
}

// Example from Image 1
const ht1 = new HashTableReplacement(10);
ht1.set(8, "Data 8");
ht1.set(3, "Data 3");
ht1.set(13, "Data 13"); // ❌ Collides with 3 (13 % 10 = 3), replaces it
ht1.print();


class HashTableChaining {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  _hash(key) {
    return key % this.size;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    // Update if key exists
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    // Chaining: Add to bucket
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === key) return pair[1];
      }
    }
    return undefined;
  }

  print() {
    console.log("\n--- HashTable (Chaining/Open Hashing) ---");
    console.log(this.table);
  }
}

// Example from Image 5
const ht2 = new HashTableChaining(10);
ht2.set(8, "Data 8");
ht2.set(3, "Data 3");
ht2.set(13, "Data 13"); // ✅ Collides with 3, added to bucket [3, 13]
ht2.print();


class HashTableLinearProbing {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  _hash(key) {
    return key % this.size;
  }

  set(key, value) {
    let index = this._hash(key);
    // 🔁 Linear Probing: index = (h(key) + i) % size
    while (this.table[index] && this.table[index][0] !== key) {
      index = (index + 1) % this.size;
    }
    this.table[index] = [key, value];
  }

  get(key) {
    let index = this._hash(key);
    while (this.table[index]) {
      if (this.table[index][0] === key) return this.table[index][1];
      index = (index + 1) % this.size;
    }
    return undefined;
  }

  print() {
    console.log("\n--- HashTable (Linear Probing) ---");
    console.log(this.table);
  }
}

// Example from Image 4
const ht3 = new HashTableLinearProbing(10);
const keys = [8, 3, 13, 6, 4, 10];
keys.forEach(k => ht3.set(k, `Val ${k}`));
ht3.print();


class HashTableQuadraticProbing {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  _hash(key) {
    return key % this.size;
  }

  set(key, value) {
    let index = this._hash(key);
    let i = 1;
    // 🔁 Quadratic Probing: index = (h(key) + i^2) % size
    while (this.table[index] && this.table[index][0] !== key) {
      index = (this._hash(key) + i * i) % this.size;
      i++;
    }
    this.table[index] = [key, value];
  }

  get(key) {
    let index = this._hash(key);
    let i = 1;
    while (this.table[index]) {
      if (this.table[index][0] === key) return this.table[index][1];
      index = (this._hash(key) + i * i) % this.size;
      i++;
    }
    return undefined;
  }

  print() {
    console.log("\n--- HashTable (Quadratic Probing) ---");
    console.log(this.table);
  }
}

// Example from Image 3
const ht4 = new HashTableQuadraticProbing(10);
[8, 3, 13, 23].forEach(k => ht4.set(k, `Val ${k}`));
ht4.print();