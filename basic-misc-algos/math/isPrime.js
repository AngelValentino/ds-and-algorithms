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