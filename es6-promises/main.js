import { takeAChance } from './take-a-chance.js';

const name = 'Nang';
takeAChance(name)
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((error) => {
    console.error(error.message);
  });
