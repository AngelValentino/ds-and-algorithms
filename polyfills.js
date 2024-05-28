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

btnLm.addEventListener('click', () => {
  console.log([1, 2, 3, 4, 5, 6].customFind((num) => num > 20));
});