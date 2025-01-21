/* Write a function that takes a number(n) and returns the number in the 
Fibonacci sequence at position n. */

//* Time Complexity - O(n)
function fibonacci(n) {
  if (n < 0) throw new Error('Input must be a non-negative integer');
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib[n];
}

//* Time Complexity - O(2^n)
// The number of function calls doubles at each level of recursion
function recursiveFibonacci(n) {
  if (n < 0) throw new Error('Input must be a non-negative integer');
  if (n < 2) return n;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}
