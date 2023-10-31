/* exported capitalizeWord */

/*
Defined a function named 'capitalizeWord', that accepts one argument 'word'
  Check condition if lowercase 'word' is strictly equal to string 'javascript'
    Return 'JavaScript' if above condition is true
    Else return the concatenation of the first character of `word` converted to uppercase and the remaining substring of `word` starting from the second character converted to lowercase.
*/

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
