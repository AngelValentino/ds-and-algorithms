/* Given two arrays, return the vaules that intersect from each other. 

arrIntersection([2, 2, 4, 1], [1, 2, 0, 2]) => [2, 1];
arrIntersection([3, 6, 1, 8], [11, 15, 23, 42]) => [];
*/

//* Time Complexity - O(n + m)
function arrIntersection(arr, arr2) {
  const intersections = [];
  const seenValues = {};

  for (let i = 0; i < arr.length; i++) {
    if (!seenValues[arr[i]]) {
      seenValues[arr[i]] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (seenValues[arr2[i]] === 1) {
      intersections.push(arr2[i]);
      seenValues[arr2[i]]++;
    }
  }

  return intersections;
}