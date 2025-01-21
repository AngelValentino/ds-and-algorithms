//* Time Complexity - O(n);
export function getStringBreakdown(str) {
  const formatedStr = str.replace(/\s+/g, '').toLowerCase();
  const breakdown = {};

  for (const char of formatedStr) {
    breakdown[char] ? breakdown[char]++ : breakdown[char] = 1;
  }

  return breakdown;
}