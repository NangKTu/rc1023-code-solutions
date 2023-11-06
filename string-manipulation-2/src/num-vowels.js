/* exported numVowels */

/*
Defined a function named numVowels, that accepts an argument string.
  Convert string to lowercase and assign back to string.
  Declared new variable vowels, assign string 'aeiou'.
  Declared new variable count, assign number 0.
  Begin a loop iterate through string where.
    Check if any vowels is in string.
      Increment count.
  return count.
*/

function numVowels(string) {
  string = string.toLowerCase();
  const vowels = 'aeiou';
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
}
