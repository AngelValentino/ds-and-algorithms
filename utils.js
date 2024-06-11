// Checks for sparse arays by comparing the filtered length with the array's one
function isSparseArrayFilter(arr) {
  return arr.filter(() => true).length !== arr.length;
}

// Using hasOwnProperty
function isSparseArrayHas(arr) {

  /* We can't use a for... in loop because it can give unexpected results as it also
  includes inherited enumerable properties */
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) {
      return true;
    }
  }
  return false;
}