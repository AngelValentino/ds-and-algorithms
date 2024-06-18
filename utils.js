//? CHECK FOR SPARSE ARRAYS

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

//? END OF CHECK FOR SPARSE ARRAYS

//TODO

//? MATH RANDOM FUNCTIONS

function generateRandomNumber(max) {
  // (max + 1) is needed to also include the max value
  return Math.floor(Math.random() * (max + 1));
}

function generateRandomNumberBetween(min, max) {
  // + 1 includes the max number also
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//? END OF MATH RANDOM FUNCTIONS