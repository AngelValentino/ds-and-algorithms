//* Time Complexity - O(n)
// A word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.
function isPalindrome(str) {
  const formattedStr = str.replace(/\s+/g, '').toLowerCase();
  let reversedStr = '';

  for (const char of formattedStr) {
    reversedStr = char + reversedStr; 
  }

  return reversedStr === formattedStr;
}