// O(n)
/* LINEAR SEARCH */

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return [i];
    }
  }
  return -1;
}

/* END OF LINEAR SEARCH */


btnLm.addEventListener('click', () => {
  console.log(linearSearch([1, 2, 6, 34], 6));
});