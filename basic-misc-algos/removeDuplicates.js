/* Write a function that takes and array as an argument and returns it with no
duplicated values.

removeDuplicates([1, 2, 3, 2, 1, 4, 5, 4]) => [1, 2, 3, 4, 5]
*/

//* Time Complexity - O(n)
function removeDuplicates(arr) {
  if (arr.length === 1) return arr;
  const seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    } 
  }

  return result; 
}