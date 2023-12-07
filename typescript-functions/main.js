function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSecondsResult:', convertMinutesToSeconds(6));
function greet(name) {
  return 'Hello, '.concat(name, '!');
}
console.log('greetResult:', greet('Helena'));
function getArea(width, height) {
  return width * height;
}
console.log('getAreaResult:', getArea(28, 10));
function getFirstName(person) {
  return person.firstName;
}
console.log(
  'getFirstNameResult:',
  getFirstName({ firstName: 'Mike', lastName: 'Tyson' })
);
function getLastElement(array) {
  return array[array.length - 1];
}
console.log(
  'getLastElementResult:',
  getLastElement(['apple', 'pineapple', 'pen'])
);
