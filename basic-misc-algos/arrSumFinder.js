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