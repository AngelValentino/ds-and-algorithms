/* BUBBLE SORT */

// O(n^2)

/* The bigger elements bubble up to the end of the array. We loop throught the elements of the
array, each time ignoring the already sorted elements at the end using arr.length - i - 1*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

/* END OF BUBBLE SORT */

/* INSERTION SORT */

// Best case - Ω(n)
// Average case - Θ(n^2)
// Worst case - O(n^2)

/* We start by assuming that the frist element in the array is already sorted, so we start from index 1.
From there, we store the current element in a temporal variable and we check if any of the sorted 
elements from before is bigger than the current one, if it is place the bigger element to the right 
until is smaller than the current one.
After that, place the temporal value to the right of where the while loop stoped. (j + 1) */
/* j >= 0 is needed to not go after the boundaries of the array and check a nonexistent element. 
Because if it weren't by this comparison the code will still compare arr[-1] > with temp, stopping
the loop nonetheless, but a reduntant comparison. */

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

/* END OF INSERTION SORT */

/* QUICK SORT */

// Best case - Ω(n log(n))
// Average case - Θ(n log(n))
// Worst case - O(n^2)

function pivot(arr, start, end) {
  /* We pick the first element of the partition as our pivot. It could also be the last, the median
  or a random one. */
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      //Swapping elements without array destructuring
        /*let temp = arr[i];
          arr[i] = arr[swapIndex];
          arr[swapIndex] = temp; */
      
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  // Swap the pivot element with the element at the swap index
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    // Where did our pivot move after being swapped?
    let pivotIndex = pivot(arr, start, end);
    // Search left segment of pivot.
      quickSort(arr, start, pivotIndex - 1);
    // Search right segment of pivot.
      quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

/* END OF QUICK SORT*/
btnLm.addEventListener('click', () => {
  console.log(quickSort([44, 33, 99, 147, 4]));
});