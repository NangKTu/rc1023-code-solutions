/* exported getKeys */

/*
Defined a function named 'getKeys', that accepts one argument 'object'
  Declared a variable 'arr' and assign an empty array
  Begin a loop through object keys
    Push key's values into 'arr' array
    Return 'arr'
*/

function getKeys(object) {
  const arr = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}
