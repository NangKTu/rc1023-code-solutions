/* exported getLastChar */
/*
Defined a function name getLastChar, that takes one parameter 'string'.
  Declared a new variable named 'lastIndex',-1 from length of 'string' to find lastIndex then assign it to 'lastIndex'.
  return value of string at 'lastIndex'.
*/

function getLastChar(string) {
  const lastIndex = string.length - 1;
  return string[lastIndex];
}
