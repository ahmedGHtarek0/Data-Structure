function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];      // العنصر اللي هنرتبه
    let j = i - 1;

    // نحرك العناصر الأكبر لليمين
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key; // نحط العنصر في مكانه الصح
  }

  return arr;
}

// Example
console.log(insertionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]