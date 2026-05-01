// recursion 
function factorial(n) {
  if (n === 1) {
    return n; // base case
  }
    return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // Output: 120