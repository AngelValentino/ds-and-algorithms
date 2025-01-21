Array.prototype.customFlat = function(depth = 1) {
  if (depth < 0) depth = 0;
  const result = [];

  function flatten(arr, currentDepth) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.hasOwnProperty(i)) {
        const element = arr[i];
        /* if element is an array and depth is still bigger than 0, 
        call flatten once more. */
        if (Array.isArray(element) && currentDepth > 0) {
          flatten(element, currentDepth - 1);
        } 
        // push element to the result array
        else {
          result.push(element);
        }
      }
    }
  }

  flatten(this, depth);

  return result;
}