/* BUBBLE SORT */

// O(n^2)
/* The bigger elements bubble up to the end of the array. We loop
throught the elements of the array, each time ignoring the already
sorted elements at the end using arr.length - i - 1*/
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


btnLm.addEventListener('click', () => {
  console.log(bubbleSort([1, 7, 34, 2, 5, 89, 9, 102, 42]));
});