const x = 13;
const y = 2;
const z = 8;
const maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);

const heroes = ['Superman', 'Batman', 'Wonderwoman', 'Aquaman'];
let randomNumber = Math.random();
randomNumber += randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'Heir to the Empire',
    author: 'Timothy Zahn',
  },
  {
    title: 'Revan',
    author: 'Drew Karpyshyn',
  },
  {
    title: 'Order 66',
    author: 'Karen Traviss',
  },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Nang Tu';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
