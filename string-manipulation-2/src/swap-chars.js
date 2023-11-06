/* exported swapChars */

/*
Define a function named 'swapChars', that accepts three arguments 'firstIndex', 'secondInxdex', and 'string'.
  Create an array of characters and assign to variable 'strArray'.
  Take the values at 'secondIndex' and 'firstIndex', assign them as 'firstIndex' and 'secondIndex'.
  return 'strArray' after joinning all characters together.
*/

function swapChars(firstIndex, secondIndex, string) {
  const strArray = string.split('');
  [strArray[firstIndex], strArray[secondIndex]] = [
    strArray[secondIndex],
    strArray[firstIndex],
  ];
  return strArray.join('');
}
