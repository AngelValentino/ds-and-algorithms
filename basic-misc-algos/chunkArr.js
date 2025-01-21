/* Also know as buffering, write an algorithm that takes two arguments, an array and
a number. The function must return an array with subarrays (chunks) Lenght n containing
the origninal array elements.

chunkArr([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]];
chunkArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
*/

//* Time Complexity - O(n)
function chunkArr(arr, n) {
  if (!arr || arr.length === 0) return;
  if (n < 1) return arr;
  const chunkedArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const currentChunk = chunkedArr[chunkedArr.length - 1];

    if (!currentChunk || currentChunk.length === n) {
      chunkedArr.push([currentElement]);
    } 
    else {
      currentChunk.push(currentElement);
    }
  }

  return chunkedArr;
}