// For multiples of 3, print "Fizz" instead of the number
// For multiples of 5, print "Buzz" instead of the number
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number

//* Time Complexity - O(n)
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzBuzz');
    } 
    else if (i % 5 === 0) {
      console.log('buzz');
    } 
    else if (i % 3 === 0) {
      console.log('fizz');
    } 
    else {
      console.log(i);
    }
  }
}

//* Time Complexity - O(n)
function fizzBuzzSimplified(n) {
  for (let i = 1; i <= n; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'fizz';
    }
    if (i % 5 === 0) {
      output += 'buzz';
    }

    output ? console.log(output) : console.log(i); 
  }
}