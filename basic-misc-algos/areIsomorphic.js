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
  if (str.length !== str2.length) return false;
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