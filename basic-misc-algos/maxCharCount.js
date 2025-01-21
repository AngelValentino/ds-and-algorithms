import { getStringBreakdown } from "./getStringBreakdown";

//* Time Complexity - O(n)
function maxCharCount(str) {
  const breakdown = getStringBreakdown(str);
  let maxChar = '';
  let maxVal = 0;

  for (const char in breakdown) {
    if (breakdown[char] > maxVal) {
      maxChar = char;
      maxVal = breakdown[char];
    }
  }

  return maxChar;
}