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

//TODO

//? FISHER-YATES SHUFFLE

//* O(n)
//* Space - O(1)

Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // Swap variables using array destructuring
    [this[i], this[randomIndex]] = [this[randomIndex], this[i]];
  }
  return this;
}

//? END OF FISHER-YATES SHUFFLE 

//TODO

//? FILTER ARRAY METHOD

Array.prototype.customFilter = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
}

//? END OF FILTER ARRAY METHOD

//TODO

//? FIND AND FIND INDEX ARRAY METHODS

Array.prototype.customFind = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return;
}

Array.prototype.customFindIndex = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
}

//? END OF FIND AND FIND INDEX ARRAY METHODS

//TODO

//? REDUCE AND REDUCE RIGHT ARRAY METHODS

//* REDUCE
Array.prototype.customReduce = function(callback, initialValue) {
  if (this.length === 0) {
    throw new Error('Reduce of empty array with no initial value');
  }
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  let i = initialValue === undefined ? 1 : 0;

  for (; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
}

//* REDUCE RIGHT
Array.prototype.customReduceRight = function(callback, initialValue) {
  if (this.length === 0) {
    throw new Error('Reduce of empty array with no initial value');
  }
  let accumulator = initialValue === undefined ? this[this.length - 1] : initialValue;
  let i = initialValue === undefined ? this.length - 2 : this.length - 1;

  for (; i >= 0; i--) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
}

//? END OF REDUCE AND REDUCE RIGHT ARRAY METHODS

//TODO

//? SOME AND EVERY ARRAY METHODS

//* SOME
Array.prototype.customSome = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
}

//* EVERY
Array.prototype.customEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
}

//? END OF SOME AND EVERY ARRAY METHODS

//TODO

//? SLICE AND SPLICE ARRAY METHODS

//* SLICE
Array.prototype.customSlice = function(start, end) {
  const result = [];
  const length = this.length;

  // Handle default parameters and negative indices
  start = (start === undefined) ? 0 : start;
  end = (end === undefined) ? length : end;

  // Handle index
  // is start positive or negative?
  start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);

  // is end positive or negative?
  end = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);

  for (let i = start; i < end; i++) {
    result.push(this[i]);
  }

  return result;
};

//* SPLICE
Array.prototype.customSplice = function(start, deleteCount) {
  const array = this;
  const length = array.length;
  /*
    Calls slice with the arguments as this value and 2 as the starting point.
    It captures all elements that are intended to be inserted into the array, 
    thus separating them from the start and deleteCount parameters.
  */
  const itemsToAdd = Array.prototype.slice.call(arguments, 2);
  const itemsToRemove = [];
  
  // is start positive or negative?
  start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  
  /*
    If deleteCount is undefined, it sets deleteCount to the number of elements from 
    start to the end of the array (length - start).
    Else if deleteCount is provided, it clamps deleteCount between 0 and the number of 
    elements available from the start index to the end of the array.
  */
  deleteCount = deleteCount === undefined 
    ? length - start 
    : Math.min(Math.max(deleteCount, 0), length - start);
  
  // Collect items to remove
  for (let i = 0; i < deleteCount; i++) {
    // Checks whether the current index is within the bounds of the array
    if (start + i < length) {
      // Adds element to the array
      itemsToRemove.push(array[start + i]);
    }
  }
  
  // Shift elements to accommodate new items
  const newLength = length - deleteCount + itemsToAdd.length;

  if (newLength > length) {
    // If the new length is greater, shift elements to the right
    for (let i = length - 1; i >= start + deleteCount; i--) {
      array[i + itemsToAdd.length - deleteCount] = array[i];
    }
  } else {
    // If the new length is less, shift elements to the left
    for (let i = start + deleteCount; i < length; i++) {
      array[i - deleteCount + itemsToAdd.length] = array[i];
    }
  }
  
  // Insert new items
  for (let i = 0; i < itemsToAdd.length; i++) {
    array[start + i] = itemsToAdd[i];
  }
  
  // Adjust array length
  array.length = newLength;
  
  return itemsToRemove;
};

//? END OF SLICE AND SPLICE ARRAY METHODS

//TODO

//? PUSH, POP, SHIFT AND UNSHIFT ARRAY METHODS

//* PUSH
Array.prototype.customPush = function(...elements) {
  for (let i = 0; i < elements.length; i++) {
    this[this.length] = elements[i];
  }
  return this.length;
}

//* POP
Array.prototype.customPop = function() {
  if (this.length === 0) return undefined;
  const removedElement = this[this.length - 1];
  this.length--;
  return removedElement;
}

//* UNSHIFT
Array.prototype.customUnshift = function(...elements) {
  const length = this.length;
  const numberOfElements = elements.length;

  for (let i = length - 1; i >= 0; i--) {
    this[i + numberOfElements] = this[i];
  }

  for (let i = 0; i < numberOfElements; i++) {
    this[i] = elements[i];
  }

  return this.length;
}

//* SHIFT
Array.prototype.customShift = function() {
  if (this.length === 0) return undefined;
  const removedElement = this[0];

  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }

  this.length--;
  return removedElement;
}

//? END OF PUSH, POP, SHIFT AND UNSHIFT ARRAY METHODS

//TODO

btnLm.addEventListener('click', () => {
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.customUnshift(9, 25, 32));
  console.log(arr);
});