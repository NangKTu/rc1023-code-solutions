/* exported toObject */
/*
Defined a function named 'toObject', that accepts one argument 'keyValuePair'
  Declared a variable 'obj', assign an empty array
  Declared a variable 'keys, assign 'keyValuePair' value at index 0
  Declared a variable 'keys, assign 'keyValuePair' value at index 1
  Update 'obj' with 'keys' and 'values'
  return 'obj'
*/

function toObject(keyValuePair) {
  const obj = {};
  const keys = keyValuePair[0];
  const values = keyValuePair[1];
  obj[keys] = values;
  return obj;
}
