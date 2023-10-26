/* exported getWords */

/*
Defined a function named 'getWords', that accepts one argument 'string'
  Declared a variable 'arr', assign the result of splitting string into an array of words to 'arr'
  Check if the first element in array is an empty string and the array has the length of 1
    return an empty array if above condition is true
  Else return arr
*/

function getWords(string) {
  const arr = string.split(' ');
  if (arr[0] === '' && arr.length === 1) {
    return [];
  }
  return arr;
}
