

/////////////////////////
// 🔴 MAX HEAP SORT (Ascending order)
/////////////////////////

function maxHeapSort(arr) {
  let n = arr.length;

  // build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, n, i);
  }

  // extract elements
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    maxHeapify(arr, i, 0);
  }

  return arr;
}

function maxHeapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeapify(arr, n, largest);
  }
}


/////////////////////////
// 🔵 MIN HEAP SORT (Descending order)
/////////////////////////

function minHeapSort(arr) {
  let n = arr.length;

  // build min heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    minHeapify(arr, n, i);
  }

  // extract elements
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    minHeapify(arr, i, 0);
  }

  return arr;
}

function minHeapify(arr, n, i) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }

  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }

  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    minHeapify(arr, n, smallest);
  }
}

/////////////////////////
// 🧪 TEST
/////////////////////////

console.log("Max Heap Sort:", maxHeapSort([5, 3, 8, 4, 2]));
console.log("Min Heap Sort:", minHeapSort([5, 3, 8, 4, 2]));

// how can i get the child of node Rule ?
/*
    1  2  3  4  5
    5  3  8  4  2  
LeftChild=IndexOfParent*2 so 1*2  +1   =2 so 3 is the left child node of parent 5
RightChild=IndexOfParent*2+1  +2  so 1*2+1=3 so 8 is the right child node of the parent 5
theParent= IndexOfChild/2  -1  so 3/2=1.5 floor(1.5)=1;
*/
