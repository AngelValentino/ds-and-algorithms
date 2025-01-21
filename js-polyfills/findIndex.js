Array.prototype.customFindIndex = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
  
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  
  return -1;
}