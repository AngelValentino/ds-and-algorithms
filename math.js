//? FIBONACCI SEQUENCE
/* Write a function that takes a number(n) and returns the number in the 
Fibonacci sequence at position n. */

//* Time Complexity - O(n)
function fibonacci(n) {
  if (n < 0) return;
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib[n];
}

//* Time Complexity - O(2^n)
function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

//? END OF FIBONACCI SEQUENCE

//TODO

//? FACTORIAL
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
function factorial2(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

//* Time Complexity - O(n)
function recursiveFactorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * recursiveFactorial(n - 1);
}

//? END OF FACTORIAL

//TODO

//? PRIME NUMBER
/* A whole number greater than 1 that cannot be exactly divided by any whole 
number other than itself and 1 (e.g. 2, 3, 5, 7, 11). 
If the number is composite; One of the two factors will be less tan or 
equal the square root for the given number(n = a * b), so we can stop the 
loop exection there as there is no need to go further because we should 
already have found a divisible number. If not, it is prime. */ 
//* Time Complexity - O(sqrt(n))
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

//* Time Complexity - O(n)
function isPrime2(n) {
  if (n < 2) return false;
                    
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

//? END OF PRIME NUMBER

//TODO

//? POWER OF TWO

// A power of two can be divided by 2 repeatedly until it reaches 1
//* Time Complexity - O(log n)
//* Space Complexity - O(1)
function isPowerOfTwo(n) {
  if (n < 1) return false;

  while(n > 1) {
    if (n % 2 !== 0) return false;
    n /= 2;
  }

  return true;
} 

/* 
This function checks if a number is a power of two using a bitwise operation.
The logic works because numbers that are powers of two have exactly one '1' bit
in their binary representation, followed by zeros (e.g., 1(1), 2(10), 4(100), 8(1000), 16(10000), etc.).

When you subtract 1 from a power of two, all the bits after the leading '1' become '1',
and the leading '1' becomes '0'. For example:
  4 (100) - 1 = 3 (011)
  8 (1000) - 1 = 7 (0111)

Applying the bitwise AND operation (`n & (n - 1)`) between a power of two and its predecessor always results in 0:
  4 & 3 = 100 & 011 = 000
  8 & 7 = 1000 & 0111 = 0000

For numbers that are not powers of two, this check will not be true.
*/
//* Time Complexity - O(1)
//* Space Complexity - O(1)
function isPowerOfTwoBitwise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0; 
}

// isPowerOfTwoBitwise(8)
// 1 0 0 0 (binary of n(8))
// 0 1 1 1 (n(8) - 1)
// - - - - &
// 0 0 0 0 
// return 0 === 0 (true)

//? END OF POWER OF TWO

//TODO

//? FIND MISSING INTEGER
/* Write a function that takes an array of integers in ascending order from 1 to n
as an argument and returns the missing integer. 
Gauss discovered that the sum of the first n natural numbers can be calculated
using the formula: (n * (n + 1)) / 2. This gives the total sum of all numbers
from 1 to n. This formula is particularly useful when trying to find a missing integer
in an unordered array. By using Gauss's formula to calculate the expected sum of
the first n numbers and then subtracting the actual sum of the elements in the array,
we can quickly determine the missing number. The difference between the expected sum
(from Gauss's formula) and the actual sum gives us the missing integer.

findMissingInt([1, 2, 3, 5, 6, 7, 8, 9, 10]) => 4;
*/

//* Time Complexity O(n)
function findMissingInt(arr) {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }

  return totalSum - arrSum;
}

// Simplified version
//* Time Complexity O(n)
const findMissing = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1;
    }
  }
}

//? END OF FIND MISSING INTEGER