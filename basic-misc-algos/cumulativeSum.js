/* Write a function that takes an array of integers and returns a new one whose elements
are the cumulative sum at each index.

cumulativeSum([1, 2, 3, 4, 5]) => [1, 3, 6, 10, 15]
*/

//* Time Complexity - O(n)
function cumulativeSum(arr) {
  const result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }

  return result;
}