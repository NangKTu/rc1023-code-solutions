/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    arr.push(words[i] + suffix);
  }
  return arr;
}
