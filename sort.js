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

// O(n^2)
/* We start by assuming that the frist element in the array is already sorted, so we start from index 1.
From there, we store the current element in a temporal variable and we check if any of the sorted 
elements from before is bigger than the current one, if it is place the bigger element to the right 
until is smaller than the current one.
After that, place the temporal value to the right of where the while lopp stoped. (j + 1) */
/* j >= 0 is needed to not go after the boundaries of the array and check a nonexistent element. 
Because if it weren't by this comparison the code will still compare arr[-1] > with temp, stopping
the loop nonetheless, but a reduntant comparison. */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    //console.log(arr, j, temp);
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
      //console.log(arr);
    }
    arr[j + 1] = temp;
  }
  return arr;
}

/* END OF INSERTION SORT */

btnLm.addEventListener('click', () => {
  console.log(insertionSort([44, 0, 33, 21, 3, 2, 99, 147]));
});