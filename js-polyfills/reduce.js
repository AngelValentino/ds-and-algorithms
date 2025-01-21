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