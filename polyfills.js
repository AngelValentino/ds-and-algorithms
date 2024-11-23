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
/* Initialize the result array, loop through the current array and check if the current 
value passes the test and it is not sparse. Return the newly created array. */
Array.prototype.customFilter = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(typeof callback + ' is not a function');
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
}

//? END OF FILTER ARRAY METHOD

//TODO

//? FIND AND FIND INDEX ARRAY METHODS
/* Loop through the current array, if the callback returns true return the current looped element, 
else return undefined. */
Array.prototype.customFind = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
  
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
}

/* Loop through the current array, if the callback returns true return the current looped element's
index, else return -1. */
Array.prototype.customFindIndex = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
  
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  
  return -1;
}

//? END OF FIND AND FIND INDEX ARRAY METHODS

//TODO

//? REDUCE AND REDUCE RIGHT ARRAY METHODS

//* REDUCE
/* Check if the callback is actually a function, the array is empty and no initial value 
has been given. Define accumulator and i variable, loop through array and reasign accumulator 
calling the callback function */
Array.prototype.customReduce = function(callback, initialValue) {
  const isInitValUndefined = initialValue === undefined;
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  if (this.length === 0 && isInitValUndefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let accumulator = isInitValUndefined ? this[0] : initialValue;
  let i = isInitValUndefined ? 1 : 0;

  for (; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
}

//* REDUCE RIGHT
// The same as reduce but starts from the end of the array
Array.prototype.customReduceRight = function(callback, initialValue) {
  const isInitValUndefined = initialValue === undefined;
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  if (this.length === 0 && isInitValUndefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let accumulator = isInitValUndefined ? this[this.length - 1] : initialValue;
  let i = isInitValUndefined ? this.length - 2 : this.length - 1;

  for (; i >= 0; i--) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
}

//? END OF REDUCE AND REDUCE RIGHT ARRAY METHODS

//TODO

//? SOME AND EVERY ARRAY METHODS

//* SOME
// Check callback validity, loop through array and see if at least on element passes the callback condition
Array.prototype.customSome = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
  
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }

  return false;
}

//* EVERY
// Check callback validity, loop through array and see if all the elements pass the callback condition
Array.prototype.customEvery = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
  
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && !callback.call(thisArg, this[i], i, this)) {
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

//? CONCAT ARRAY METHOD

Array.prototype.customConcat = function(...args) {
  let result = Array.from(this);

  for (const arg of args) {
    if (Array.isArray(arg)) {
      result.push(...arg);
    } 
    else {
      result.push(arg);
    }
  }

  return result;
}

//? END OF CONCAT ARRAY METHOD

//TODO

//? JOIN ARRAY METHOD
/* Initialize the result string, loop through array and add values separated by the separator 
coverting null and undefined to "". Finally return the newly created string. */
Array.prototype.customJoin = function(separator = ',') {
  let result = '';

  for (let i = 0; i < this.length; i++) {
    if (i > 0) result += separator;
    result += this[i] === null || this[i] === undefined ? '' : this[i];
  }

  return result;
}

//? JOIN ARRAY METHOD

//TODO

//? REVERSE ARRAY METHOD

Array.prototype.customReverse = function() {
  let start = 0;
  let end = this.length - 1;

  while (start < end) {
    // Check if the elements at the start and end indices exist
    let startExists = this.hasOwnProperty(start);
    let endExists = this.hasOwnProperty(end);

    // Swap the elements or handle the sparse array appropriately
    if (startExists && endExists) {
      const temp = this[start];
      this[start] = this[end];
      this[end] = temp;
    } 
    // Only start exists
    // End is empty, move start to end and after delete start.
    else if (startExists) {
      this[end] = this[start];
      delete this[start];
    } 
    // Only end exists
    // Start is empty, move end to start and after delete end.
    else if (endExists) {
      this[start] = this[end];
      delete this[end];
    }

    // Move towards the middle
    start++;
    end--;
  }

  return this;
}

//? END OF REVERSE ARRAY METHOD

//TODO

//? BASIC SPLIT STRING METHOD

//* It only has the basic functionality
String.prototype.customSplit = function(separator) {
  // If we don't call toString it returns the primitive object
  if (separator === null || separator === undefined) return [this.toString()];

  // Spread operator can handle the object, there's no need to call toString
  if (separator === '') return [...this];

  const result = [];
  let startIndex = 0;
  let index = this.indexOf(separator, startIndex);

  while (index !== -1) {
    // Push the content from the start index until the found separator(not inclusive)
    result.push(this.substring(startIndex, index));
    // Start from right after the found separator
    startIndex = index + separator.length;
    // Check if there's another match
    index = this.indexOf(separator, startIndex);
  }

  // Push the rest of the string
  result.push(this.substring(startIndex));

  return result;
}

//? END OF BASIC SPLIT STRING METHOD

//TODO

//? ARRAY INCLUDES METHOD

Array.prototype.customIncludes = function(searchElement, fromIndex = 0) {
	let length = this.length;
	let n = fromIndex;

	if (length === 0) return false;
  // The search index goes past the array boundaries
	if (n >= length) return false;

  /* Checks for a negative fromIndex, and counts from end or if it goes past the 
  array boundaries, from 0*/
	if (n < 0) {
		n = Math.max(length + n, 0);
	}

  // It also checks if fromIndex doesn't go past the array boundaries.
	while (n < length) {
    // Checks if there is a NaN value
		if (Number.isNaN(searchElement) && Number.isNaN(this[n])) return true;
    // Checks for the searchElement
		if (this[n] === searchElement) return true;
    n++;
	}

	return false;
};

//? END OF ARRAY INLCUDES METHOD

//TODO

//? ARRAY MAP AND FOREACH METHODS

//* FOREACH
// Check callback typeof, loop over the current array and call the callback for each iteration
Array.prototype.customForEach = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

  for (let i = 0; i < this.length; i++) {
    // Check if the property exists in the array (to handle sparse arrays)
    if (this.hasOwnProperty(i)) {
      callback.call(thisArg, this[i], i, this);
    }
  }
}

//* MAP
// Check callback typeof, create empty array, map over the current one, return newly created array.
Array.prototype.customMap = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

  const result = [];

  for (let i = 0; i < this.length; i++) {
    // Check if the property exists in the array (to handle sparse arrays)
    if (this.hasOwnProperty(i)) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return result;
}

//? END OF ARRAY MAP AND FOREACH METHODS

//TODO

//? FLAT AND FLAT MAP ARRAY METHOD

//* FLAT
Array.prototype.customFlat = function(depth = 1) {
  const result = [];

  function flatten(arr, currentDepth) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.hasOwnProperty(i)) {
        const element = arr[i];
        /* if element is an array and depth is still bigger than 0, 
        call flatten once more. */
        if (Array.isArray(element) && currentDepth > 0) {
          flatten(element, currentDepth - 1);
        } 
        // push element to the result array
        else {
          result.push(element);
        }
      }
    }
  }

  flatten(this, depth);

  return result;
}

//* FLAT MAP
/* The flatMap() method of Array instances returns a new array formed by 
applying a given callback function to each element of the array, 
and then flattening the result by one level. */
Array.prototype.customFlatMap = function(callback, thisArg) {
  return this.customMap(callback, thisArg).customFlat();
}

//? END OF FLAT AND FLAT MAP ARRAY METHOD