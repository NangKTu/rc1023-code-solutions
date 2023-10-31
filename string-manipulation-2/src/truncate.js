/* exported truncate */

/*
Defined a function named 'truncate', that accepts two arguments 'length' and 'string'
  Declared a variable 'str', assign an empty string
  Begin a loop iterate through string where
    For each index in string less than 'length' and length of 'string'
      Appened 'string' index to 'str'
      Return result of concatenated 'str' + '...'
*/

function truncate(length, string) {
  let str = '';
  for (let i = 0; i < length && i < string.length; i++) {
    str += string[i];
  }
  return str + '...';
}
