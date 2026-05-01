function bubbleSortOptimized(arr) {
  let n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
        swapped = true;
      }
    }

    if (!swapped) break; // already sorted
  }

  return arr;
}

// Example
console.log(bubbleSortOptimized([5, 3, 8, 4, 2]));