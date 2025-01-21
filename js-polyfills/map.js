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