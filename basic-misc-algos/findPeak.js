//? PEAK ELEMENT
/* Find the peak element of an array. 

findPeak([1, 3, 7, 1, 2, 6, 0, 3, 2]) => 7;
findPeak([1, 2, 3, 4, 5]) => 5;
findPeak([5, 4, 3, 2, 1]) => 5;
*/

//* Time Complexity - O(n)
function findPeak(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr[0];

  let peak = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > peak) {
      peak = arr[i];
    }
  }

  return peak;
}