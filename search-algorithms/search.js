//? LINEAR SEARCH

//* Time Complexity - Ω(1) Best Case 
//* Time Complexity - Θ(n) Average case
//* Time Complexity - O(n) Worst case
//* Space Complexity - O(1)

// Find the target's index if it exists in the array, else return -1.
// It iterates each item of the array until target is found, else return.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

//? END OF LINEAR SEARCH

//TODO

//? BINARY SEARCH

//* Time Complexity - Ω(1) Best case
//* Time Complexity - Θ(log n) Average case
//* Time Complexity - O(log n) Worst case
//* Space Complexity - O(1)

/* The array needs to be sorted in order to use binary search. 
Find the target's index, else return -1. In each iteration we locate
the midpoint of the array, 
if (mid === target) we return the index, 
else if (mid < target) we search the right side of the array/subarrays 
if (mid > target) we search the left side of the array/subarrays. */

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

//* Space Complexity - O(log n) Recursive callstack

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

//TODO

//? INTERPOLATION SEARCH

//* Time Complexity - Ω(1) Best case
//* Time Complexity - Θ(log log n) Average case
//* Time Complexity - O(n) Worst case => The elements are distributed in a skewed manner.
//* Space Complexity - O(1)

/* The data needs to be uniformly distributed and sorted to have a better 
performance, and work as intended. It guesses where the target should be in
the array and narrows the serach in each iteration. */ 

function interpolationSearch(arr, target) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end && target >= arr[start] && target <= arr[end]) {
		if (start === end) {
			if (arr[start] === target) return start;
			return -1;
		}

    // Calculate estimate index position
		let pos = start + Math.floor(((end - start) / (arr[end] - arr[start])) * (target - arr[start]));

		if (arr[pos] === target) {
			return pos;
		}

		// Adjusting search boundaries and narrowing the search area
		if (arr[pos] < target) {
			start = pos + 1;
		} 
    else {
			end = pos - 1;
		}
	}

	return -1;
}

//* Space Complexity - O(log n) Recursive callstack

function interpolationSearchRecursive(arr, target, start = 0, end = arr.length - 1) {
	if (start > end || target < arr[start] || target > arr[end]) {
		return -1;
	}

	let pos = start + Math.floor(((end - start) / (arr[end] - arr[start])) * (target - arr[start]));

	if (arr[pos] === target) {
		return pos;
	} 
  else if (arr[pos] < target) {
		return interpolationSearchRecursive(arr, target, pos + 1, end);
	} 
  else {
		return interpolationSearchRecursive(arr, target, start, pos - 1);
	}
}

//? END OF INTERPOLATION SEARCH