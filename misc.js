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
    if (secondCharMap[key] !== firstCharMap[key]) {
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

/* PRINT PYRAMID */

// O(n)
function printSteps(n) {
  if (n <= 0) return;
  let col = '';
  let i = 1;
  while (i <= n) {
    col += '#';
    console.log(col);
    i++;
  }
}

// O(n^2)
function printInvertedSteps(n) {
  for (let i = 1; i <= n; i++) {
    let col = '';
    for (let j = 1; j <= n - i; j++) {
      col += ' ';
    }
    for (let k = 1; k <= i; k++) {
      col += '#';
    }
    console.log(col);
  }
}

// O(n^2)
function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let col = '';
    for (let j = 1; j <= n - i; j++) {
      col += ' ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      col += '#';
    }
    console.log(col);
  }
}

/* END OF PRINT PYRAMID */

/* REMOVE ARRAY DUPLICATES */

// O(n)
function removeArrDup(arr) {
  if (arr.length === 1) return arr;
  const arrDupes = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arrDupes[arr[i]]) {
      arrDupes[arr[i]] = true;
      newArr.push(arr[i]);
    } 
  }
  return newArr; 
}

/* END OF REMOVE ARRAY DUPLICATES */

/* ARRAY SUM FINDER*/

// O(n^2)
function arrSumFinder(arr, sum) {
  if (arr.length < 2) return false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

// O(n)
// If we already have a number that's the same as the difference between our the total sum and our current number, it means that the numbers can be added to form the sum argument. 
function arrSumFinder2(arr, sum) {
  if (arr.length < 2) return false;
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (seen[sum - num]) {
      return true;
    }
    seen[num] = true;
  }

  return false;
}

// O(n log n)
function arrSumFinder3(arr, sum) {
  if (arr.length < 2) return false;
  const sortedArr = arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const currSum = sortedArr[start] + sortedArr[end];
    if (currSum === sum) {
      return true;
    } 
    else if (currSum < sum) {
      start++;
    } 
    else {
      end--;
    }
  }
  return false;
}

/* END OF ARRAY SUM FINDER */

/* MERGE SORTED ARRAY */

// O(n)
function mergeSortedArr(arrA, arrB) {
  if (!arrA.length) {
    return arrB;
  } 
  else if (!arrB.length) {
    return arrA;
  }
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] <= arrB[j]) {
      mergedArr.push(arrA[i]);
      i++;
    } 
    else {
      mergedArr.push(arrB[j]);
      j++;
    }
  }

  while (i < arrA.length) {
    mergedArr.push(arrA[i]);
    i++;
  }

  while (j < arrB.length) {
    mergedArr.push(arrB[j]);
    j++;
  }

  return mergedArr;
}

/* END OF MERGE SORTED ARRAY */

/* CUMULATIVE SUM */

// O(n)
function cumulativeSum(arr) {
  const result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }

  return result;
}

/* END OF CUMULATIVE SUM */

/* FIND SUM PAIRS */

// O(n)
function findSumParis(arr, n) {
  const pairs = [];
  const seenNumbers = {};

  for (const num of arr) {
    const target = n - num;
    if (seenNumbers[target]) {
      pairs.push([num, target]);
    } 
    seenNumbers[num] = true;
  }
  
  return pairs;
}

/* END OF FIND SUM PAIRS */

/* ARRAY INRESECTION */
// Given two arrays, return the vaules that intersect from each other.

// O(n + m)
function arrIntersection(arr, arr2) {
  const intersections = [];
  const seenValues = {};

  for (let i = 0; i < arr.length; i++) {
    if (!seenValues[arr[i]]) {
      seenValues[arr[i]] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (seenValues[arr2[i]] === 1) {
      intersections.push(arr2[i]);
      seenValues[arr2[i]]++;
    }
  }

  return intersections;
}

/* END OF ARRAY INTERSECTION */


btnLm.addEventListener('click', () => {
  console.log(arrIntersection([34, 1, 2, 6, 7, 78], [1, 7, 7, 7, 5, 9, 34]));
});