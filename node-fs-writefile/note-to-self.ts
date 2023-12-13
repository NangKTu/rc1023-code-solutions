import { writeFile } from 'node:fs/promises';

const note = process.argv.slice(2).join(' ') + '\n';
const filePath = 'note.txt';

try {
  await writeFile(filePath, note);
  console.log('Noted.');
} catch (error) {
  console.error('Error writing to file:', error);
}
