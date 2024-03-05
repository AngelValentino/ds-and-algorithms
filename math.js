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

btnLm.addEventListener('click', () => {
  console.log(factorial(5));
});
