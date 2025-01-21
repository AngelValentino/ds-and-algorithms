Array.prototype.customForEach = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

  for (let i = 0; i < this.length; i++) {
    // Check if the property exists in the array (to handle sparse arrays)
    if (this.hasOwnProperty(i)) {
      callback.call(thisArg, this[i], i, this);
    }
  }
}