//? ARRAY FILTER

Array.prototype.customFilter = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
}

//? END OF ARRAY FILTER

//TODO

//? ARRAY ARRAY FIND AND FIND INDEX

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

//? END OF ARRAY FIND AND FIND INDEX

//TODO

//? ARRAY REDUCE AND REDUCE RIGHT

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

//? ARRAY REDUCE AND REDUCE RIGHT

//TODO

btnLm.addEventListener('click', () => {
  console.log([5, 10, 20, 30, 32].customReduceRight((acc, num) =>  acc + num, 0));
});