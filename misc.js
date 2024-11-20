//? REVERSE A STRING

//* Time Complexity - O(n)
function reverseString(str) {
  if (!str) return;
  let reversedStr = '';
  for (const char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

//* Time Complexity - O(n)
const reverseString2 = (str) => str ? str.split('').reverse().join('') : undefined;

//* Time Complexity - O(n)
const reverseStringWithPolyfills = (str) => str ? str.customSplit('').customReverse().customJoin('') : undefined;

//? END OF REVERSE A STRING

//TODO

//? PALINDROME

//* Time Complexity - O(n)
// A word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.
function isPalindrome(str) {
  const formatedStr = str.replace(/\s+/g, '').toLowerCase();
  let reversedStr = '';

  for (const char of formatedStr) {
    reversedStr = char + reversedStr; 
  }

  return reversedStr === formatedStr;
}

//? END OF PALINDROME

//TODO

//? COUNT THE CHARACTERS OF A STRING

//* Time Complexity - O(n);
function getStringBreakdown(str) {
  const formatedStr = str.replace(/\s+/g, '').toLowerCase();
  const breakdown = {};

  for (const char of formatedStr) {
    breakdown[char] ? breakdown[char]++ : breakdown[char] = 1;
  }

  return breakdown;
}

//? END OF COUNT THE CHARACTERS OF A STRING

//TODO

//? RETURN THE HIGHEST REPEATING CHARACTER IN A STRING

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

//? END RETURN THE HIGHEST REPEATING CHARACTER IN A STRING

//TODO

//? ANAGRAM

//* Time Complexity - O(n)
// A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
function isAnagram(str, str2) { 
  const firstCharMap = getStringBreakdown(str);
  const secondCharMap = getStringBreakdown(str2);

  for (const char in firstCharMap) {
    if (secondCharMap[char] !== firstCharMap[char]) {
      return false;
    }
  }

  return true;
}

//? END OF ANAGRAM

//TODO

//? REVERSE A NUMBER

//* Time Complexity - O(n)
function reverseNum(num) {
  const numStr = num + '';
  let reversedNum = '';

  for (const digit of numStr) {
    reversedNum = digit + reversedNum;
  }

  return parseFloat(reversedNum) * Math.sign(num);
}

//? END OF REVERSE AN NUMBER

//TODO

//? FIZZBUZZ */
// For multiples of 3, print "Fizz" instead of the number
// For multiples of 5, print "Buzz" instead of the number
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number

//* Time Complexity - O(n)
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzBuzz');
    } 
    else if (i % 5 === 0) {
      console.log('buzz');
    } 
    else if (i % 3 === 0) {
      console.log('fizz');
    } 
    else {
      console.log(i);
    }
  }
}

//* Time Complexity - O(n)
function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'fizz';
    }
    if (i % 5 === 0) {
      output += 'buzz';
    }

    output ? console.log(output) : console.log(i); 
  }
}

//? END OF FIZZBUZ */

//TODO

//? CAPITALIZE WORDS

//* Time Complexity - O(n)
function capitalizeWords(str) {
  let result = str[0].toUpperCase();
  const regex = /[\s,.;:'"-]+/;

  for (let i = 1; i < str.length; i++) {
    result += str[i - 1].match(regex) ? str[i].toUpperCase() : str[i];
  }

  return result;
}

//? END OF CAPITALIZE WORDS

//TODO

//? COUNT VOWELS

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

//? END OF COUNT VOWELS

//TODO

//? ARRAY CHUNK
/* Also know as buffering, write an algorithm that takes two arguments, an array and
a number. The function must return an array with subarrays (chunks) Lenght n containing
the origninal array elements.

chunkArr([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]];
chunkArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
*/

//* Time Complexity - O(n)
function chunkArr(arr, n) {
  if (!arr || arr.length === 0) return;
  const chunkedArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const currentChunk = chunkedArr[chunkedArr.length - 1];

    if (!currentChunk || currentChunk.length === n) {
      chunkedArr.push([currentElement]);
    } 
    else {
      currentChunk.push(currentElement);
    }
  }

  return chunkedArr;
}

//* Time Complexity - O(n)
function chunkArr2(arr, n) {
  const chunkedArr = [];
  let i = 0;

  while(i < arr.length) {
    chunkedArr.push(arr.slice(i, i + n));
    i += n;
  }

  return chunkedArr;
}

//? END OF ARRAY CHUNK

//TODO

//? PRINT PYRAMID
// Print pyramids and stairs

//* Time Complexity - O(n)
function printSteps(n) {
  if (n <= 0) return;
  let row = '';
  let i = 1;
  while (i <= n) {
    row += '#';
    console.log(row);
    i++;
  }
}

//* Time Complexity - O(n^2)
function printInvertedSteps(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= i; k++) {
      row += '#';
    }
    console.log(row);
  }
}

//* Time Complexity - O(n^2)
function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      row += '#';
    }
    console.log(row);
  }
}

//? END OF PRINT PYRAMID

//TODO

//? REMOVE ARRAY DUPLICATES
/* Write a function that takes and array as an argument and returns it with no
duplicated values.

removeDuplicates([1, 2, 3, 2, 1, 4, 5, 4]) => [1, 2, 3, 4, 5]
*/

//* Time Complexity - O(n)
function removeDuplicates(arr) {
  if (arr.length === 1) return arr;
  const arrDupes = {};
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arrDupes[arr[i]]) {
      arrDupes[arr[i]] = true;
      newArr.push(arr[i]);
    } 
  }

  return newArr; 
}

//? END OF REMOVE ARRAY DUPLICATES

//TODO

//? ARRAY SUM FINDER
/* Write a function that takes two arguments, an array of numbers and a number.
This function should return a boolean value if the sum(number) can be found 
between the array's numbers. 

arrSumFinder([6, 4, 3, 2, 1, 7], 9) => true;
arrSumFinder([6, 4, 3, 2, 1, 7], 2) => false;
*/

//* Time Complexity - O(n^2)
function arrSumFinder(arr, sum) {
  if (arr.length < 2) return false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  
  return false;
}

//* Time Complexity - O(n)
/* If we already have a number that's the same as the difference between 
the total sum and our current number, it means that the numbers can be 
added to form the sum argument. */
function arrSumFinder2(arr, sum) {
  if (arr.length < 2) return false;
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    const diff = sum - currNum;
    
    if (seen[diff]) return true;
    seen[currNum] = true;
  }

  return false;
}


//* Time Complexity - O(n log n)
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

//? END OF ARRAY SUM FINDER

//TODO

//? MERGE SORTED ARRAY
/* Write a function that takes two sorted arrays of numbers and returns a merged one.

mergeSortedArr([5, 6, 10], [3, 4, 7]) => [3, 4, 5, 6, 7, 10];
*/

//* Time Complexity - O(n)
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

//? END OF MERGE SORTED ARRAY

//TODO

//? CUMULATIVE SUM
/* Write a function that takes an array of integers and returns a new one whose elements
are the cumulative sum at each index.

cumulativeSum([1, 2, 3, 4, 5]) => [1, 3, 6, 10, 15]
*/

//* Time Complexity - O(n)
function cumulativeSum(arr) {
  const result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }

  return result;
}

//? END OF CUMULATIVE SUM

//TODO

//? FIND SUM PAIRS
/* Write a function that takes an array of integers and a number. This function
must return an array of arrays that shows each pair of numbers from the input array
equal to the sum given.

findSumParis([1, 2, 3, 4, 5], 6) => [[4, 2], [5, 1]];
findSumParis([1, 2, 3], 7) => [];
findSumParis([], 5) => [];
*/

//* Time Complexity - O(n)
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

//? END OF FIND SUM PAIRS

//TODO

//? ARRAY INTERSECTION
/* Given two arrays, return the vaules that intersect from each other. 

arrIntersection([2, 2, 4, 1], [1, 2, 0, 2]) => [2, 1];
arrIntersection([3, 6, 1, 8], [11, 15, 23, 42]) => [];
*/

//* Time Complexity - O(n + m)
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

//? END OF ARRAY INTERSECTION

//TODO

//? ISOMORPHIC STRINGS
/* Given two strings check if they are isomorphic, meaning that each character 
of the string is interchanchable in order with the other string character. 
If the characters in one string can be replaced to obtain the other string 
while preserving the order of characters, the strings are considered isomorphic. 
For example, “egg” and “add” are isomorphic because we can replace 'e' with 'a' 
and 'g' with 'd'.

egg => add
e => a
g => d

efl => egg
e => g
f => g
l !== g => g is already maped to f

areIsomorphic('egg', 'add') => true;
areIsomorphic('foo', 'bar') => false;
*/

//* Time Complexity - O(n)
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
      charMap2[char2] = char1;
    }
    if (charMap[char1] !== char2 || charMap2[char2] !== char1) {
      return false;
    }
  }

  return true;
}

//? END OF ISOMORPHIC STRINGS

//TODO

//? BRACKET BALANCER
/* Check if the brackets '{}' given are balanced '{{}}' or not '{{}'
 
isBalanced('{}{}') => true
isBalanced('{{}}') => true
isBalanced('{{}') => false
isBalanced('{{') => false
isBalanced('') => false

*/
//* Time Complexity - O(n)
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
 
//? END OF BRACKET BALANCER

//TODO

//? SORT WAVE ARRAY
/* Write a function that takes an array of unsorted integers and sorts it into a
wave array. Returns an array with the values changing from hight to low. 

sortWaveArr([1, 2, 3, 4, 5]) => [2, 1, 4, 3, 5];
sortWaveArr([11, 8, 5, 10, 6]) => [6, 3, 10, 5, 11, 8]:
*/

//* Time Complexity - O(n log n)
function sortWaveArr(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 1; i += 2) {
    const temp = sortedArr[i];
    sortedArr[i] = sortedArr[i + 1];
    sortedArr[i + 1] = temp;
  }

  return sortedArr;
}

//* Time Complexity - O(n)
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

//? END OF SORT WAVE ARRAY

//TODO

//? DUTCH FLAG SORT
/* Write a function that rakes an array of unsorted integers of 0, 1 and 2s only
and returns the sorted array. */
// Everything before low === 0
// Everything before mid === 1
// Everything after high === 2

//* Time Complexity - O(n)
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

//? END OF DUTCH FLAG SORT

//TODO

//? TRAPPING RAINWATER
/* Calculate the total ammount of water that can be trapped between two slopes 
using an array to simulate the hills. We achieve the result by utilising two 
pointers from left to right that remember which was the highest slop and how 
much water can be drained in front of them, comparing the maxPointer hight with 
the next element. And always checking the other pointer's hight. 

trappingRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) => 6;
trappingRainwater([4, 2, 0, 3, 2, 5]) => 9;
trappingRainwater([1, 2, 3, 4, 5]) => 0;
*/

//* Time Complexity - O(n)
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

//? END OF TRAPPING RAINWATER

//TODO

//? PEAK ELEMENT
/* Find the peak element of an array. 

findPeak([1, 3, 7, 1, 2, 6, 0, 3, 2]) => 7;
findPeak([1, 2, 3, 4, 5]) => 5;
findPeak([5, 4, 3, 2, 1]) => 5;
*/

//* Time Complexity - O(n)
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

//? END OF PEAK ELEMENT

//TODO

//? TOWER OF HANOI

//* Time Complexity - O(2^n)
function hanoi(n, fromRod, toRod, usingRod) {
  // Base case: If there is only one disk, move it directly from fromRod to toRod
  if (n === 1) {
    console.log(`Moved disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  // Recursive case:
  // Step 1: Move the top n-1 disks from fromRod to usingRod, using toRod as auxiliary
  hanoi(n-1, fromRod, usingRod, toRod);
  // Step 2: Move the nth disk from fromRod to toRod
  console.log(`Moved disk ${n} from ${fromRod} to ${toRod}`);
  // Step 3: Move the n-1 disks from usingRod to toRod, using fromRod as auxiliary
  hanoi(n-1, usingRod, toRod, fromRod);
}

//? END OF TOWER OF HANOI