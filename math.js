const btnLm = document.querySelector('button');

/* FIBONACCI SEQUENCE */

function fibonacci(n) {
  const fibonacciSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
  }
  return fibonacciSequence;
}

// O(n)
/* END OF FIBONACCI SEQUENCE */

/* FACTORIAL */
 
function factorial(n) {
  let result = 1;
  while(n > 0) {
    result *= n;
    n--;
  }
  return result;
} 

// O(n)
/* END OF FACTORIAL */ 

/* PRIME NUMBER */
// If the number is composite; One of the two factors will be less tan or equal the square root for the given number(n = a * b), so we can stop the loop exection there as there is no need to go further because we should already have found a divisible number alredy. If not, it is prime.

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

// O(sqrt(n))
/* END OF PRIME NUMBER */

btnLm.addEventListener('click', () => {
  console.log(isPrime(37));
  console.log(isPrime(4));
  console.log(isPrime(1));
});
