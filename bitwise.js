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

//* Time Complexity - O(n)
//* Space Complexity - O(1)
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

//TODO

//? Count On Bits (Population Count)

/*
  Implement a function that counts the number of set bits (1's) 
  in the binary representation of an integer. This is known as 
  the population count or Hamming Weight.

  NOTE: It uses the AND (&) and RIGHT SHIFT (>>) operators.

  Example Usage:
 
  Input: countSetBits(5)
  Output: 2 (binary representation of 5 is '101', which has two '1's)
 
  Input: countSetBits(7)
  Output: 3 (binary representation of 7 is '111', which has three '1's)
 
  Input: countSetBits(10)
  Output: 2 (binary representation of 10 is '1010', which has two '1's)
*/

//* Time Complexity - O(log n)
/* It's log n and not n because the function works on the bits of the number,
log n is just the estimate. */
//* Space Complexity - O(1)
function countOnBits(n) {
  let count = 0;
  while (n > 0) {
      count += n & 1;
      n >>= 1;
  }
  return count;
}

// Input: countOnBits(5)
// Output: 2

// count 0, n(5) => 101
// 1 0 1 (binary of n)
// 0 0 1 (binary of 1)
// - - - &
// 0 0 1 count (1)
// Shift bits of n to the right by 1 (>> 1)
// 1 0 1 (binary of n)
// - - - >>
// 0 1 0 (new binary of n after RIGHT SHIFT >>)

// count 1, n(2) => 010
// 0 1 0 (binary of n)
// 0 0 1 (binary of 1)
// - - - &
// 0 0 0 count (1)
// Shift bits of n to the right by 1 (>> 1)
// 0 1 0 (binary of n)
// - - - >>
// 0 0 1 (new binary of n after RIGHT SHIFT >>)

// count 1, n(1) => 001
// 0 0 1 (binary of n)
// 0 0 1 (binary of 1)
// - - - &
// 0 0 1 count (2)
// Shift bits of n to the right by 1 (>> 1)
// 0 0 1 (binary of n)
// - - - >>
// 0 0 0 (new binary of n after RIGHT SHIFT >>)

// n is not larger than 0, while loop terminates
// return count; (2)

//* Non bitwise solution
//* Time Complexity - O(log n) or O(k)
/* We are working with the binary number, not the number itself. */
//* Space Complexity - O(log n) or O(k)
function onBitsNonBitwise(n) {
  const binaryStr = n.toString(2);
  return binaryStr.split('').filter(bit => bit === '1').length;
}

//? End of Count On Bits (Population Count)

//TODO

//? Set Specific Bit

/*
  Implement a function that sets (changes to '1') a specific bit at a given 
  position in the binary representation of the integer.

  NOTE: It uses the OR (|) and LEFT SHIFT (<<) operators.

  Example Usage:
 
  Input: setSpecificBit(5, 1)
  Output: 7 (binary representation of 5 is '101',
  setting the bit at position 1 results in '111')
 
  Input: setSpecificBit(8, 2)
  Output: 12 (binary representation of 8 is '1000',
  setting the bit at position 2 results in '1100')
 
  Input: setSpecificBit(0, 3)
  Output: 8 (binary representation of 0 is '0',
  setting the bit at position 3 results in '1000')
*/

//* Time Complexity - O(1) 
//* Space Complexity - O(1)
function setSpecificBit(number, position) {
  const mask = 1 << position;
  return number | mask;
}

// Input: setSpecificBit(5, 1)
// Output: 7 (binary representation of 5 is '101',
// setting the bit at position 1 results in '111')

// number 5, position 1
// 1 0 1 (binary of n)
// Shift bits of 1 to the left by position (<< postion)
// 0 0 1 (binary of 1)
// - - - <<
// 0 1 0 (mask of 1, new binary of position after LEFT SHIFT <<)
// Compares the mask and number using the OR (|) operator to set the specific bit
// 1 0 1 (binary of n)
// 0 1 0 (mask) It adds as many padding(leading) 0s as needed
// - - - |
// 1 1 1 (new n is 7)
// return n | mask; (7)

//? End of Set Specific Bit

//TODO

//? Find Complement

/*
  Implement a function that finds the bitwise complement of a number.
  The bitwise complement is formed by inverting all bits in the binary
  representation of the number. Ones to Zeros, Zeros to Ones

  NOTE: The function addresses only the significant bits of the number
  to accurately compute the complement.

  Example Usage:
 
  Input: findComplement(5)
  Output: 2 (binary representation of 5 is '101',
  and its complement is '010' which is 2 in decimal)
 
  Input: findComplement(1)
  Output: 0 (binary representation of 1 is '1',
  and its complement is '0')
 
  Input: findComplement(8)
  Output: 7 (binary representation of 8 is '1000',
  and its complement is '0111' which is 7 in decimal)
*/

//* Time Complexity - O(1)
//* Space Complexity - O(1)
function findComplement(number) { 
  // It can give decimal numbers, Math.floor() makes sure we work with integers
  const significantBits = Math.floor(Math.log2(number)) + 1;
  // Set OFF bits ON
  const mask = (1 << significantBits) - 1;
  // Return the complement
  return (~number) & mask;
}

console.log(findComplement(5));

// number => 5, binary => 101
// significantBits => 3 (it gets us the position of the furthest ON bit + 1 === bit count)
// 0 0 0 1 (binary of 1 with leading zeros)
// - - - - << 3
// 1 0 0 0 (mask) => 0 1 1 1 (mask(8) - 1 = 7)
// ...111 0 1 0 (~number) It also sets the leading zeros ON
// ...000 1 1 1 (mask)
// ...--- - - - &
// ...000 0 1 0 
// return (2)    

//* Time Complexity - O(k) 
//* Space Complexity - O(k) 
function findComplementNonBitwise(number) {
  const binaryStr = number.toString(2);
  let complementStr = '';

  for (const char of binaryStr) {
      complementStr += char === '0' ? '1' : '0';
  }

  return parseInt(complementStr, 2);
}

//? End of find complement