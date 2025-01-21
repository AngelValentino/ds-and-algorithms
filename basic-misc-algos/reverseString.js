//* Time Complexity - O(n)
function reverseString(str) {
  if (!str) return;
  let reversedStr = '';

  for (const char of str) {
    reversedStr = char + reversedStr;
  }

  return reversedStr;
}

//* Time Complexity - O(n)
const reverseStringUsingJsMethods = str => str ? str.split('').reverse().join('') : undefined;