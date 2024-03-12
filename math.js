const btnLm = document.querySelector('button');

/* FIBONACCI SEQUENCE */

// O(n)
function fibonacci(n) {
  const fibonacciSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
  }
  return fibonacciSequence;
}

/* END OF FIBONACCI SEQUENCE */

/* FACTORIAL */
 
// O(n)
function factorial(n) {
  let result = 1;
  while(n > 0) {
    result *= n;
    n--;
  }
  return result;
} 

/* END OF FACTORIAL */ 

/* PRIME NUMBER */
// If the number is composite; One of the two factors will be less tan or equal the square root for the given number(n = a * b), so we can stop the loop exection there as there is no need to go further because we should already have found a divisible number alredy. If not, it is prime.

// O(sqrt(n))
function isPrime(n) {
  if (n < 2) {
    return false;
  }                      
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/* END OF PRIME NUMBER */

/* POWER OF TWO*/

// O(logN)
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while(n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
} 

// O(1)
function isPowerOfTwoBitWise(n) {
  if (n <= 0) {
    return false;
  }
  return (n & (n - 1)) === 0; 
}

// isPowerOfTwoBitWise(8) => 
//       8 === 1000
//       7 === 0111
//   8 & 7 === 0000


/* END OF POWER OF TWO */

btnLm.addEventListener('click', () => {
  console.log(isPowerOfTwoBitWise(0));
  console.log(isPowerOfTwoBitWise(1));
  console.log(isPowerOfTwoBitWise(2));
  console.log(isPowerOfTwoBitWise(2)); //true
  console.log(isPowerOfTwoBitWise(5)); //false
  console.log(isPowerOfTwoBitWise(8));
  console.log(isPowerOfTwoBitWise(100)); //false
});
