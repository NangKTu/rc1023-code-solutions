/* exported countdown */
function countdown(number) {
  const arr = [];
  for (let i = number; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}
