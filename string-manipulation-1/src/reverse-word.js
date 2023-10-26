/* exported reverseWord */

/*
Defined a function named 'reverseWord', that accepts one argument 'word'
  Declared a variable 'backward', assign an empty string to it
  Begin a loop that iterates through the string `word' in reverse
    add values to string 'backward'
  return the string 'backward'
*/

function reverseWord(word) {
  let backward = '';
  for (let i = word.length - 1; i >= 0; i--) {
    backward += word[i];
  }
  return backward;
}
