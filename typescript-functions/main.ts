function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('convertMinutesToSecondsResult:', convertMinutesToSeconds(6));

function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log('greetResult:', greet('Helena'));

function getArea(width: number, height: number): number {
  return width * height;
}
console.log('getAreaResult:', getArea(28, 10));

function getFirstName(person: { firstName: string; lastName: string }): string {
  return person.firstName;
}
console.log(
  'getFirstNameResult:',
  getFirstName({ firstName: 'Mike', lastName: 'Tyson' })
);

function getLastElement(array: any[]): any[] {
  return array[array.length - 1];
}
console.log(
  'getLastElementResult:',
  getLastElement(['apple', 'pineapple', 'pen'])
);
