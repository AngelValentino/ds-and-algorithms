Array.prototype.customEvery = function(callback, thisArg) {
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
  
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i) && !callback.call(thisArg, this[i], i, this)) {
      return false;
    }
  }

  return true;
}