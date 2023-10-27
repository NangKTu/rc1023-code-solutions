/* exported getValues */

/*
Defined a function named 'getKeys', that accepts one argument 'object'
  Declared a variable 'arr' and assign an empty array
  Begin a loop through object keys
    Push values at key into 'arr' array
    Return 'arr'
*/

function getValues(object) {
  const arr = [];
  for (const key in object) {
    arr.push(object[key]);
  }
  return arr;
}
