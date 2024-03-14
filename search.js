// O(n)
/* LINEAR SEARCH */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return [i];
    }
  }
  return -1;
}

/* END OF LINEAR SEARCH */

// The array needs to be sorted in order to use binary search.
// O(log n)
/* BINARY SEARCH */

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) {
      return mid;
    } 
    else if (arr[mid] < target) {
      start = mid + 1;
    } 
    else {
      end = mid - 1;
    }
  }

  return -1;
}

function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } 
  else if (arr[mid] < target) {
    // start = mid + 1
    return binarySearchRecursive(arr, target, mid + 1, end);
  } 
  else {
    // end = mid - 1
    return binarySearchRecursive(arr, target, start, mid - 1);
  }
}

// binarySearchRecursive([0, 2, 5, 9, 10, 11, 28, 65, 85, 99], 85);
// start = 0;
// end = 9;
// mid = 4
//   return binarySearchRecursive(arr, target, 5, 9)
//   mid = 7;
//     return binarySearchRecursive(arr, target, 8, 9);
//     mid = 8; 
//     return 8;

/* END OF BINARY SEARCH */


btnLm.addEventListener('click', () => {
  console.log(binarySearchRecursive([0, 2, 5, 9, 10, 11, 28, 65, 85, 99], 85));
});


