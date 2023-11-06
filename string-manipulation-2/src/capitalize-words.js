/* exported capitalizeWords */

/*
Defined a function named 'capitalizeWords', that accepts one argument 'string'
  Create an array of words from string for each space character and assign to variable words.
  Begin a loop that iterate through 'string' where
    For each word at index of 'words', assign the concatenation of the first character at index of 'words' converted to uppercase and the remaining characters from index of 'words' starting from the second character converted to lowercase.
  Return a string of 'words' after joinning words with characters.
*/

function capitalizeWords(string) {
  const words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}
