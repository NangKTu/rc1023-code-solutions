/* exported tail */

/*
Defined a function 'tail', that accepts one argument 'array'
  Declared a variable 'arr', assign an empty array to 'arr'
  Begin a loop iterates through 'array'
    Push the value of elements from 'array' into 'arr'
  return 'arr'
*/

function tail(array) {
  const arr = [];
  for (let i = 1; i <= array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
}
