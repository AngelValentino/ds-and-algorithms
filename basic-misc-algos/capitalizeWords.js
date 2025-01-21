//* Time Complexity - O(n)
function capitalizeWords(str) {
  let result = str[0].toUpperCase();
  const regex = /[\s,.;:'"-]+/;

  for (let i = 1; i < str.length; i++) {
    result += str[i - 1].match(regex) ? str[i].toUpperCase() : str[i];
  }

  return result;
}