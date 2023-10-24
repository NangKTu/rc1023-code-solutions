function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  return '"Hey, ' + name + '"';
}
const greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  return width * height;
}
const getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
const getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElementResult:', getLastElementResult);
