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
function findMissingIntSimplified(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1;
    }
  }
}