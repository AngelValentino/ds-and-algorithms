/* REVERSE A STRING */

//O(n)
function reverseString(str) {
  if (!str) return;
  let reversedStr = '';
  for (const char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

//O(n)
const reverseString2 = (str) => str ? str.split('').reverse().join('') : undefined;

//O(n)
const reverseStringWithPolyfills = (str) => str ? str.customSplit('').customReverse().customJoin('') : undefined;

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

/* ARRAY INTERSECTION */
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


/* ISOMORPHIC STRINGS */
// Given two strings check if they are isomorphic, meaning that each character of the string is interchanchable in order with the other string character.

// egg => add
// e => a
// g => d

// efl => egg
// e => g
// f => g
// l !== g => g is already maped to f

// O(n)
function areIsomorphic(str, str2)  {
  if (str.length !== str2.length) return;
  const charMap = {};
  const charMap2 = {};

  for (let i = 0; i < str.length; i++) {
    const char1 = str[i];
    const char2 = str2[i];

    if (!charMap[char1]) {
      charMap[char1] = char2;
    }
    if (!charMap2[char2]) {
      charMap2[char2] = char1
    }
    if (charMap[char1] !== char2 || charMap2[char2] !== char1) {
      return false;
    }
  }

  return true;
}

/* END OF ISOMORPHIC STRINGS */

/* BRACKET BALANCER */
// Check if the brackets {} given are balanced [{{}}] or not [{{}]

// O(n)
function isBalanced(strExp) {
  if (typeof strExp !== 'string' || strExp.length === 0) return false;
  const stack = [];
  
  for (const char of strExp) {
    if (char === '{') {
      stack.push(char);
    } 
    else if (char === '}') {
      if (stack.length === 0 || stack.pop() !== '{') {
        return false;
      }
    }
  }

  return stack.length === 0;
}
 
/* END OF BRACKET BALANCER */

/* SORT WAVE ARRAY */
// Return an array with the values changing from hight to low.

// O(n log n)
function sortWaveArr(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 1; i += 2) {
    const temp = sortedArr[i];
    sortedArr[i] = sortedArr[i + 1];
    sortedArr[i + 1] = temp;
  }

  return sortedArr;
}

// O(n)
// Without sorting.
function waveArr(arr) {
  const waveArr = [...arr];
  
  for (let i = 0; i < waveArr.length - 1; i++) {
    if (i % 2 === 0 && waveArr[i] < waveArr[i + 1]) {
      const temp = waveArr[i];
      waveArr[i] = waveArr[i + 1];
      waveArr[i + 1] = temp;
    } 
    else if (i % 2 !== 0 && waveArr[i] > waveArr[i + 1]) {
      const temp = waveArr[i];
      waveArr[i] = waveArr[i + 1];
      waveArr[i + 1] = temp;
    }
  }
  
  return waveArr;
}

/* END OF SORT WAVE ARRAY */

/* DUTCH FLAG SORT */
// Sort an array of 0, 1 and 2's.
// Everything before low === 0
// Everything before mid === 1
// Everything after high === 2

// O(n)
function dutchFlagSort(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  let temp;

  while(mid <= high) {
    switch(arr[mid]) {
      case 0:
        temp = arr[low];
        arr[low] = arr[mid];
        arr[mid] = temp;
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        temp = arr[mid];
        arr[mid] = arr[high];
        arr[high] = temp;
        high--;
        break;
      default:
        console.log('Invalid input array') ;
        return;
    }
  }

  return arr;
}

/* END OF DUTCH FLAG SORT */

/* TRAPPING RAINWATER */
// Calculate the total ammount of water that can be trapped between two slopes using an array to simulate the hills.
// We achieve the result by utilising two pointers from left to right that remember which was the highest slop and how much water can be drained in front of them, comparing the maxPointer hight with the next element. 
// And always checking the other pointer's hight.

// O(n)
function trappingRainwater(arr) {
  if (arr.length <= 2) return 0;

  let maxLeft = 0;
  let maxRight = 0;
  let left = 0;
  let right = arr.length - 1;
  let totalDrainedWater = 0;

  while(left < right) {
    if (arr[left] < arr[right]) {
      if (arr[left] > maxLeft) {
        maxLeft = arr[left];
      } else {
        totalDrainedWater += maxLeft - arr[left];
      }
      left++;
    } 
    else {
      if (arr[right] > maxRight) {
        maxRight = arr[right];
      } else {
        totalDrainedWater += maxRight - arr[right];
      }
      right--;
    }
  }

  return totalDrainedWater;
}

/* END OF TRAPPING RAINWATER */

/* PEAK ELEMENT */
// Find the peak element of an array.

// O(n)
function findPeak(arr) {
  if (!arr.length) return null;
  if (arr.length === 1) return arr[0];

  let peak = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > peak) {
      peak = arr[i];
    }
  }

  return peak;
}

/* END OF PEAK ELEMENT */