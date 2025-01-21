Array.prototype.customPush = function(...elements) {
  for (let i = 0; i < elements.length; i++) {
    this[this.length] = elements[i];
  }
  return this.length;
}