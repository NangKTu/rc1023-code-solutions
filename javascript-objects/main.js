const student = {
  firstName: 'Nang',
  lastName: 'Tu',
  age: 30,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'retread technician';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);
console.log(student);

const vehicle = {
  make: 'Tesla',
  model: 'Y',
  year: 2023,
};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log(vehicle);

const pet = {
  name: 'Kiki',
  type: 'Cat',
};
delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
