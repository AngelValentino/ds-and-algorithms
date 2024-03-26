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

btnLm.addEventListener('click', () => {
  console.log(reverseString('banana'));
});