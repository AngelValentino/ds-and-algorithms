// n! = n * (n - 1)
// JavaScript can't handle factorials that are larger than 170.
 
//* Time Complexity - O(n)
function factorial(n) {
  let result = 1;
  while(n > 0) {
    result *= n;
    n--;
  }
  return result;
} 

//* Time Complexity - O(n)
function recursiveFactorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * recursiveFactorial(n - 1);
}