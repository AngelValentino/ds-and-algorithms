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