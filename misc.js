/* REVERSE A STRING */

//O(n)
function reverseString(str) {
  let reversedStr = '';
  for (const char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

//O(n)
const reverseString2 = (str) => str.split('').reverse().join('');

/* END OF REVERSE A STRING */

/* PALINDROME */

//O(n)
function isPalindrome(str) {
  const formatedStr = str.replace(/\s+/g, '');
  let reversedStr = '';

  for (const char of formatedStr) {
    reversedStr = char + reversedStr; 
  }

  return reversedStr === formatedStr;
}

/* END OF PALINDROME */

/* COUNT THE CHARACTERS OF A STRING */

//O(n);
function getStringBreakdown(str) {
  const formatedStr = str.toLowerCase();
  const breakdown = {};

  for (const char of formatedStr) {
    if (char === ' ') {
      continue;
    }
    breakdown[char] ? breakdown[char]++ : breakdown[char] = 1;
  }

  return breakdown;
}

/* END OF COUNT THE CHARACTERS OF A STRING */

/* RETURN THE HIGHEST REPEATING CHARACTER IN A STRING */

//O(n)
function maxCharCount(str) {
  const breakdown = getStringBreakdown(str);
  let currMaxChar = '';
  let currMaxVal = 0;

  for (const key in breakdown) {
    if (breakdown[key] > currMaxVal) {
      currMaxChar = key;
      currMaxVal = breakdown[key];
    }
  }

  return currMaxChar;
}

/* END RETURN THE HIGHEST REPEATING CHARACTER IN A STRING */

/* ANAGRAM */

//O(n)
function isAnagram(str, str2) { 
  const firstCharMap = getStringBreakdown(str);
  const secondCharMap = getStringBreakdown(str2);

  for (const key in firstCharMap) {
    if (!secondCharMap[key] || secondCharMap[key] !== firstCharMap[key]) {
      return false;
    }
  }

  return true;
}

/* END OF ANAGRAM */

/* REVERSE AN NUMBER */

//O(n)
function reverseNum(num) {
  const numStr = num + '';
  let reversedNum = '';

  for (const char of numStr) {
    reversedNum = char + reversedNum;
  }

  return parseFloat(reversedNum) * Math.sign(num);
}

/* END OF REVERSE AN NUMBER */

btnLm.addEventListener('click', () => {
  console.log(reverseNum(2.587));
});