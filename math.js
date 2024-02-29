const btnLm = document.querySelector('button');

/* FIBONACCI SEQUENCE */

function fibonacci(n) {
  const fibonacciSequence = [0, 1];
  
  for (let i = 2; i < n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
  }

  console.log(fibonacciSequence);
}

// O(n)
/* END OF FIBONACCI SEQUENCE*/

btnLm.addEventListener('click', () => {
  fibonacci(7)
});
