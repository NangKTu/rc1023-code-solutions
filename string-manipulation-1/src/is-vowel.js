/* exported isVowel */

/*
Define a function named 'isVowel', that takes one argument 'char'
  Check if 'char' is 'a' or 'A' and return value true
  Check if 'char' is 'e' or 'E' and return value true
  Check if 'char' is 'o' or 'O' and return value true
  Check if 'char' is 'i' or 'I' and return value true
  Check if 'char' is 'u' or 'U' and return value true
  Check if 'char' is not any of the above return false
*/

function isVowel(char) {
  if (char === 'a' || char === 'A') {
    return true;
  }
  if (char === 'e' || char === 'E') {
    return true;
  }
  if (char === 'o' || char === 'O') {
    return true;
  }
  if (char === 'i' || char === 'I') {
    return true;
  }
  if (char === 'u' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
