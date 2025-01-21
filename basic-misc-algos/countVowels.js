//* Time Complexity - O(n)
function countVowels(str) {
  const result = str.match(/[aeiou]/gi);
  return result ? result.length : 0;
}

//* Time Complexity - O(n)
function countVowels2(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let matches = 0;

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      matches++;
    }
  }

  return matches;
}