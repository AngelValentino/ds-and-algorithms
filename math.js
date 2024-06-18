//? FIBONACCI SEQUENCE

//* Time Complexity - O(n)
function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
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

/* If the number is composite; One of the two factors will be less tan or 
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

/* We are able to achieve this because the numbers which are powers of two
are always composed by an ON bit followed by zeros. 
e.g 1(1), 2(10), 4(100), 8(1000), 16(10000)... */
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

//? END OF FIND MISSING INTEGER