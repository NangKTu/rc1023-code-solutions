/* exported compact */

/*
Defined a function 'tail', that accepts one argument 'array'
  Declared a variable 'arr', assign an empty array to 'arr'
  Begin a loop iterates through 'array'
    Check if the value at 'array' index is falsy values
    Push the value of elements from 'array' into 'arr'
  return 'arr'
*/

function compact(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      arr.push(array[i]);
    }
  }
  return arr;
}
