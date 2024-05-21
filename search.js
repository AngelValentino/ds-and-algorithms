//? LINEAR SEARCH

//* Best case - Ω(1)
//* Average case - Θ(n)
//* Worst case - O(n)
//* Space - O(1)

// Find the target's index if it exists in the array, else return -1.
// It iterates each item of the array until target is found, else return.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return [i];
    }
  }
  return -1;
}

//? END OF LINEAR SEARCH

//? BINARY SEARCH

//* Best case - Ω(1)
//* Average case - Θ(log n)
//* Worst case - O(log n)
//* Space - O(1)

/* The array needs to be sorted in order to use binary search. 
Find the target's index, else return -1. In each iteration we locate
the midpoint of the array, 
if (mid === target) we return the index, 
else if (mid < target) we search the right side of the array/subarrays 
if (mid > target) we search the left side of the array/subarrays.
*/

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    // return index if target is found
    if (arr[mid] === target) {
      return mid;
    } 
    // search right side of the array/subarray
    else if (arr[mid] < target) {
      start = mid + 1;
    } 
    // search left sid of the array/subarray
    else {
      end = mid - 1;
    }
  }

  return -1;
}

//* Space - O(log n) Recursive callstack

function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  // return index if target is found
  if (arr[mid] === target) {
    return mid;
  } 
  // search right side of the array/subarray
  else if (arr[mid] < target) {
    // start = mid + 1
    return binarySearchRecursive(arr, target, mid + 1, end);
  } 
  // search left sid of the array/subarray
  else {
    // end = mid - 1
    return binarySearchRecursive(arr, target, start, mid - 1);
  }
}

//? END OF BINARY SEARCH

btnLm.addEventListener('click', () => {
  console.log(binarySearch([0, 2, 4, 6, 1, 3, 5, 7], 7));
});
