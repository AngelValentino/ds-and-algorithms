Array.prototype.customPop = function() {
  if (this.length === 0) return undefined;
  const removedElement = this[this.length - 1];
  this.length--;
  return removedElement;
}
