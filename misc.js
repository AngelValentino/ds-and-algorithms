/* REVERSE A STRING */

//O(n)
function reverseString(str) {
  let reversedStr = '';
  for (char of str) {
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

  for (char of formatedStr) {
    reversedStr = char + reversedStr; 
  }

  return reversedStr === formatedStr;
}

/* END OF PALINDROME */

/* COUNT THE CHARACTERS OF A STRING */

//O(n);
function stringBreakdown(str) {
  const formatedStr = str.toLowerCase();
  const breakdown = {};

  for (char of formatedStr) {
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
  const breakdown = stringBreakdown(str);
  let currMaxChar = '';
  let currMaxVal = 0;

  for (key in breakdown) {
    if (breakdown[key] > currMaxVal) {
      currMaxChar = key;
      currMaxVal = breakdown[key];
    }
  }

  return currMaxChar;
}

/* END RETURN THE HIGHEST REPEATING CHARACTER IN A STRING */

btnLm.addEventListener('click', () => {
  console.log(maxCharCount('race car'));
});