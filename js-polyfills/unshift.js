Array.prototype.customUnshift = function(...elements) {
  const numberOfElements = elements.length;

  for (let i = this.length - 1; i >= 0; i--) {
    this[i + numberOfElements] = this[i];
  }

  for (let i = 0; i < numberOfElements; i++) {
    this[i] = elements[i];
  }

  return this.length;
}