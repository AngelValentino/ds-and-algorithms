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

/* FIZZBUZZ */

//O(n)
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (!(i % 15)) {
      console.log('fizzBuzz');
    } 
    else if (!(i % 5)) {
      console.log('buzz');
    } 
    else if (!(i % 3)) {
      console.log('fizz');
    } 
    else {
      console.log(i);
    }
  }
}

//O(n)
function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    let output = '';

    if (!(i % 3)) {
      output += 'fizz';
    }
    if (!(i % 5)) {
      output += 'buzz';
    }

    output ? console.log(output) : console.log(i); 
  }
}

/* END OF FIZZBUZ */

//O(n)
/* CAPITALIZE WORDS */

function capitalizeWords(str) {
  let result = str[0].toUpperCase();
  const regex = /[\s,.;:'"-]+/;

  for (let i = 1; i < str.length; i++) {
    result += str[i - 1].match(regex) ? str[i].toUpperCase() : str[i];
  }

  return result;
}

/* END OF CAPITALIZE WORDS*/

/* COUNT VOWELS */

//O(n)
function countVowels(str) {
  return str.match(/[aeiou]/gi).length;
}

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

/* END OF COUNT VOWELS*/

/* ARRAY CHUNK */

// O(n)
function chunkArr(arr, n) {
  const chunkedArr = [];

  for (const element of arr) {
    const previousChunk = chunkedArr[chunkedArr.length - 1];

    if (!previousChunk || previousChunk.length === n) {
      chunkedArr.push([element]);
    } 
    else {
      previousChunk.push(element);
    }
  }

  return chunkedArr;
}

function chunkArr2(arr, n) {
  const chunkedArr = [];
  let i = 0;

  while(i < arr.length) {
    chunkedArr.push(arr.slice(i, i + n));
    i += n;
  }

  return chunkedArr;
}

/* END OF ARRAY CHUNK*/

/* PRINT STEPS */

// O(n)
function printSteps(n) {
  if (n <= 0) return;
  let steps = '';
  let i = 1;
  while (i <= n) {
    steps += '#';
    console.log(steps);
    i++;
  }
}

/* END OF PRINT STEPS */

btnLm.addEventListener('click', () => {
  printSteps(5);
});