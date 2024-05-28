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

btnLm.addEventListener('click', () => {
  console.log([1, 2, 3, 4, 5, 6].customFilter((num) => num > 2 ));
});