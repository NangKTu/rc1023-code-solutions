/* exported ransomCase */

/*
Defined a function named 'ransomCase', that accepts one argument 'string'
  Declared a variable 'str', assign an empty string;
  Begin a loop iterate through 'string' where
    If character index is even or not
      Append character to 'str' after convert to lowercase when condition above is true
    Else
      Append character to 'str' after convert to uppercase
    return string 'str'
*/

function ransomCase(string) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      str += string[i].toLowerCase();
    } else {
      str += string[i].toUpperCase();
    }
  }
  return str;
}
