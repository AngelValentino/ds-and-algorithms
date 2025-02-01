//? BUBBLE SORT

//* Time Complexity - Ω(n) Best case => if the array is already sorted
//* Time Complexity - Θ(n^2) Average case
//* Time Complexity - O(n^2) Worst case
//* Space Complexity - O(1)
//* Stable sort

/* The bigger elements bubble up to the end of the array. 
We loop throught the elements of the array, each time ignoring the 
already sorted elements at the end using arr.length - i - 1 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      // Swap bigger left element with smaller right one until 
      // arr.length + 1 - 1.
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }

    /*  if the array is already sorted return early from the outer 
    loop ending in (n) iterations instead of (n^2). */
    if (!swap) break;
  }
  return arr;
}
//? END OF BUBBLE SORT

//TODO

//? SELECTION SORT 

//* Time Complexity - Ω(n^2) Best case
//* Time Complexity - Θ(n^2) Average case
//* Time Complexity - O(n^2) Worst case
//* Space Complexity - O(1)
//* Unstable sort

/* Searches through an array an keeps track of the minimum or maximum vale 
depending on the sorting order(ascending or descending) during each 
iteration swaps the tracked value with the beginning value of the array
at the end of each iteration.
We start at i + 1 in each iteration as the first values of the array are 
already sorted and there's no need to check them again. */

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        // We found a new minimum value, so we remember the index.
        min = j;
      }
    }
    // Swap the former min value with the current one.
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

//? END OF SELECTION SORT

//TODO

//? INSERTION SORT

//* Time Complexity - Ω(n) Best case => if the array is already sorted
//* Time Complexity - Θ(n^2) Average case
//* Time Complexity - O(n^2) Worst case
//* Space Complexity - O(1)
//* Stable sort

/* We start by assuming that the first element in the array is already 
sorted, so we start from index 1. From there, we store the current element 
in a temporal variable and we check if any of the sorted elements from before 
are bigger than the current one. If they are, place the bigger element +1 to the 
right. After that, place the temporal value to the right of where the while loop 
stoped. (j + 1) or to the right of the element smaller than the temp value. */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }
  return arr;
}

//? END OF INSERTION SORT

//TODO

//? MERGE SORT

//* Time Complexity - Ω(n log n) Best case
//* Time Complexity - Θ(n log n) Average case
//* Time Complexity - O(n log n) Worst case
//* Space Complexity - O(n)
//* Stable sort

/* We divide the array into two sub arrays until there's only one, 
after that we start sorting the subarrays until we have the final 
sorted array. */

function merge(leftArr, rightArr, arr) {
  const leftSize = leftArr.length;
  const rightSize = rightArr.length;
  // Initialize indices for the merged array (i), left array (l), and right array (r)
  let i = 0; l = 0; r = 0;

  // Merge the arrays until we reach the end of one of them
  while(l < leftSize && r < rightSize) {
    // Compare the current element of left_arr with the current element of right_arr
    if (leftArr[l] < rightArr[r]) {
      // If left_arr[l] is smaller, place it in the merged array (arr)
      arr[i] = leftArr[l];
      l++;
    }
    else {
      // If right_arr[r] is smaller (or equal), place it in the merged array (arr)
      arr[i] = rightArr[r];
      r++;
    }
    // Move the index of the merged array forward to the next position
    i++;
  }

  // If there are any remaining elements in the left array, add them to the merged array
  while(l < leftSize) {
    arr[i] = leftArr[l];
    i++;
    l++;
  }

  // If there are any remaining elements in the right array, add them to the merged array
  while(r < rightSize) {
    arr[i] = rightArr[r];
    i++;
    r++;
  }
}

function mergeSort(arr) {
  const length = arr.length;
  // If the array has 1 or fewer elements, it's already sorted
  if (length <= 1) return;

  const middleIndex = Math.floor(length / 2);
  const leftArr = [];
  const rightArr = [];

  let i = 0; // left array
  let j = 0; // right array

  for (; i < length; i++) {
    if (i < middleIndex) {
      // Slice the left half of the array
      leftArr[i] = arr[i];
    } 
    else {
      // Slice the right half of the array
      rightArr[j] = arr[i];
      j++;
    }
  }

  mergeSort(leftArr); // Recursively sort the left half
  mergeSort(rightArr); // Recursively sort the right half
  merge(leftArr, rightArr, arr); // Merge the two sorted halves back into the original array
  return arr;
}

//? END OF MERGE SORT

//TODO

//? QUICK SORT

//* Time Complexity - Ω(n log(n)) Best case
//* Time Complexity - Θ(n log(n)) Average case
//* Time Complexity - O(n^2) Worst case => If the array is already sorted.
//* Space Complexity - O(log n)
//* Unstable sort

/* Move smaller elements to the left, bigger to the right and recursively
divide the array into two partitions. */

function pivot(arr, start, end) {
  /* We pick the first element of the partition as our pivot. It could also be the last, the median
  or a random one. */
  const pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      //Swapping elements without array destructuring
      const temp = arr[i];
      arr[i] = arr[swapIndex];
      arr[swapIndex] = temp; 
      //[arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  // Swap the pivot element with the element at the swap index
  // [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  const temp = arr[swapIndex];
  arr[swapIndex] = arr[start];
  arr[start] = temp;
  return swapIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    // Where did our pivot move after being swapped?
    const pivotIndex = pivot(arr, start, end);
    // Search left segment of pivot.
      quickSort(arr, start, pivotIndex - 1);
    // Search right segment of pivot.
      quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

//? END OF QUICK SORT