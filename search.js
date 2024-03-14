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
    if (mid < target) {
      start = mid + 1;
    } 
    else {
      end = mid - 1;
    }
  }

  return -1;
}

/* END OF BINARY SEARCH */


btnLm.addEventListener('click', () => {
  console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
});