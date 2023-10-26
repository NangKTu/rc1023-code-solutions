/* exported initial */

/*
Defined a function 'tail', that accepts one argument 'array'
  Declared a variable 'arr', assign an empty array to 'arr'
  Begin a loop iterates through 'array'
    Push the value of elements from 'array' into 'arr'
  return 'arr'
*/

function initial(array) {
  const arr = [];
  for (let i = 0; i <= array.length - 2; i++) {
    arr.push(array[i]);
  }
  return arr;
}
