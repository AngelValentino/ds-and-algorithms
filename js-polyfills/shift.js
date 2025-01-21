Array.prototype.customShift = function() {
  if (this.length === 0) return undefined;
  const removedElement = this[0];

  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }

  this.length--;
  return removedElement;
}