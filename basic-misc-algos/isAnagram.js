import { getStringBreakdown } from "./getStringBreakdown";

function isAnagram(str, str2) { 
  if (str.length !== str2.length) return false;
  const firstCharMap = getStringBreakdown(str);
  const secondCharMap = getStringBreakdown(str2);

  for (const char in firstCharMap) {
    if (firstCharMap[char] !== secondCharMap[char]) {
      return false;
    }
  }

  return true;
}