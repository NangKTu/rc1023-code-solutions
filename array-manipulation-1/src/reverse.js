/* exported reverse */

/*
Defined a function 'reverse', that accepts one argument 'array'
  Declared a variable 'arr', assign an empty array to 'arr'
  Begin a loop iterates through 'array'
    Push the value of elements from 'array' into 'arr'
  return 'arr'
*/

function reverse(array) {
  const arr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}
