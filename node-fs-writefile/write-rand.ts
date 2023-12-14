import { writeFile } from 'node:fs/promises';

const randomNumber = Math.random();
const randomString = randomNumber.toString();

try {
  await writeFile('random.txt', randomString, 'utf-8');
  console.log(`Random number ${randomNumber} has been written to random.txt`);
} catch (error) {
  console.log('Unable to write file', error);
}
