//* Time Complexity - O(n)
function reverseNum(num) {
  const numStr = num + '';
  let reversedNum = '';

  for (const digit of numStr) {
    reversedNum = digit + reversedNum;
  }

  return parseFloat(reversedNum) * Math.sign(num);
}