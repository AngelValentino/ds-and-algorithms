/* REVERSE A STRING */

//O(n)
function reverseString(str) {
  let reversedStr = '';
  for (char of str) {
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
  for (char of formatedStr) {
    reversedStr = char + reversedStr; 
  }
  return reversedStr === formatedStr;
}

/* END OF PALINDROME */

btnLm.addEventListener('click', () => {
  console.log(isPalindrome('race car'));
});