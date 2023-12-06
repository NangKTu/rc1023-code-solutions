const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((number) => {
  console.log(number);
});

console.log('Reverse order:');
const length = values.length;
values.forEach((number, index) => {
  const reversedIndex = length - 1 - index;
  console.log(values[reversedIndex]);
});
