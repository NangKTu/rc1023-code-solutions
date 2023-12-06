var student = {
  firstName: 'Leon',
  lastName: 'Kennedy',
  age: 28,
};
var fullName = ''.concat(student.firstName, ' ').concat(student.lastName);
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Rookie Cop';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
var vehicle = {
  make: 'Ford',
  model: 'F-150',
  year: 2023,
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
var pet = {
  name: 'Meow',
  kind: 'Meow meow',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
