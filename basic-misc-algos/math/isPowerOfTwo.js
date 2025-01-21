// A power of two can be divided by 2 repeatedly until it reaches 1
//* Time Complexity - O(log n)
//* Space Complexity - O(1)
function isPowerOfTwo(n) {
  if (n < 1) return false;

  while(n > 1) {
    if (n % 2 !== 0) return false;
    n /= 2;
  }

  return true;
} 

/* 
This function checks if a number is a power of two using a bitwise operation.
The logic works because numbers that are powers of two have exactly one '1' bit
in their binary representation, followed by zeros (e.g., 1(1), 2(10), 4(100), 8(1000), 16(10000), etc.).

When you subtract 1 from a power of two, all the bits after the leading '1' become '1',
and the leading '1' becomes '0'. For example:
  4 (100) - 1 = 3 (011)
  8 (1000) - 1 = 7 (0111)

Applying the bitwise AND operation (`n & (n - 1)`) between a power of two and its predecessor always results in 0:
  4 & 3 = 100 & 011 = 000
  8 & 7 = 1000 & 0111 = 0000

For numbers that are not powers of two, this check will not be true.
*/
//* Time Complexity - O(1)
//* Space Complexity - O(1)
function isPowerOfTwoBitwise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0; 
}

// isPowerOfTwoBitwise(8)
// 1 0 0 0 (binary of n(8))
// 0 1 1 1 (n(8) - 1)
// - - - - &
// 0 0 0 0 
// return 0 === 0 (true)