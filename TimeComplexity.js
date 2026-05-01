// logartheim or Linear
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// O(n)
printAll([1,2,3,4,5]);


function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
// O(n^2)

printAllPairs([1,2,3,4,5]);


function printAllP(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        for(let k = 0; k < arr.length; k++){
            console.log(arr[i], arr[j], arr[k]);
        }
    }
  }
}
// O(n^3)

printAllP([1,2,3,4,5]);


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let m = Math.floor((left + right) / 2); //if / or *  so log N  else + or - so N
        if (arr[m] === target) {
            return m;
        } else if (arr[m] < target) {
            left = m + 1;
        } else {
            right = m - 1;
        }
    }
    return -1;
}
// O(log n)

binarySearch([1,2,3,4,5], 5);


/*
for(let i = n/2; i < n; i++)        // O(n)
  for(let k = 1; k < n; k = k * 2)  // O(log n)
    for(let j = 1; j < n; j = j * 2)// O(log n)
      console.log(i + k + j); // O(n log^2 n)


O(n/2 * log n * log n)
= O(n * log n * log n)
= O(n log² n)
*/    