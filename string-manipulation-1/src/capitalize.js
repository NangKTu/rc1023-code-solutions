/* exported capitalize */
/* Defined a function named 'capitalize' that take one parameter 'word'.
  Declare a variable named 'firstIndex' and assign the uppercase letter from 'word' at 0 inxdex.
  Declare a variable name 'theRest' and assign the rest of 'word' in lowercase.
  return 'firstIndex' concatenate 'theRest'.
*/

function capitalize(word) {
  const firstIndex = word[0].toUpperCase();
  const theRest = word.slice(1).toLowerCase();
  return firstIndex + theRest;
}
