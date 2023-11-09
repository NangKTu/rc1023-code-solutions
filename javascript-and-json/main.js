const library = [
  {
    isbn: '9780593321447',
    title: 'Sea of Tranquility',
    author: 'Emily St. John Mandel',
  },
  {
    isbn: '9781250854117',
    title: 'Nona the Ninth',
    author: 'Tamsyn Muir',
  },
  {
    isbn: '9780356510392',
    title: 'Leviathan Falls',
    author: 'James S.A. Corey',
  },
];

console.log('Library:', library);
console.log('Type of Library:', typeof library);

const jsonLibrary = JSON.stringify(library);
console.log('jsonLibrary:', jsonLibrary);
console.log('Type of jsonLibrary:', typeof jsonLibrary);

const jsonString = '{"id": "007", "name": "James Bond"}';

console.log('jsonString:', jsonString);
console.log('Type of:', typeof jsonString);

const jsonObject = JSON.parse(jsonString);

console.log('jsonObject:', jsonObject);
console.log('Type of:', typeof jsonObject);
