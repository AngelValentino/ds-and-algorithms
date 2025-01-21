Array.prototype.customJoin = function(separator = ',') {
  let result = '';

  for (let i = 0; i < this.length; i++) {
    if (i > 0) result += separator;
    result += this[i] === null || this[i] === undefined ? '' : this[i];
  }

  return result;
}