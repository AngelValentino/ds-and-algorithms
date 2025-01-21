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