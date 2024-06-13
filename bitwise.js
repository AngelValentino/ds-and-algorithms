//? Find Non-Repeating Element with XOR

/*
  Implement a function that finds the unique, non-repeating element in an array
  where every other element repeats. It utilizes the XOR operation to cancel
  out the repeating numbers, leaving only the unique number.
  The even repeating numbers end up canceling each other bitwise, and the 
  odd repeating number remains.

  NOTE: This algorithm assumes that all numbers are repeated an even number of 
  times, except for one, which is repeated an odd number of times.

  Example Usage:
 
  Input: findNonRepeating([1, 2, 1, 2, 3])
  Output: 3
 
  Input: findNonRepeating([4, 5, 5, 4, 6])
  Output: 6
  
  Input: findNonRepeating([7, 8, 8, 7, 9, 9, 10])
  Output: 10
*/

//* Time O(n), Space O(1)
function findNonRepeating(arr) {
  let result = 0;
  for (const num of arr) {
      result ^= num;
  }
  return result;
}

// Input: findNonRepeating([1, 2, 1, 2, 3])
// Output: 3

// result 0, num 1
// 0 0 0 (binary of result)
// 0 0 1 (binary of num)
// - - - XOR
// 0 0 1 result (1)

// result 1, num 2
// 0 0 1 (binary of result)
// 0 1 0 (binary of num)
// - - - XOR
// 0 1 1 result (3)

// result 3, num 1
// 0 1 1 (binary of result)
// 0 0 1 (binary of num)
// - - - XOR
// 0 1 0 result (2)

// result 2, num 2
// 0 1 0
// 0 1 0
// - - - XOR
// 0 0 0 result (0)

// result 0, num 3
// 0 0 0
// 0 1 1
// - - - XOR
// 0 1 1 result (3)

// return result; (3)

//? End of Find Non-Repeating Element with XOR