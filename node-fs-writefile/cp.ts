import { readFile, writeFile } from 'node:fs/promises';

const sourceFilePath = process.argv[2];
const destinationFilePath = process.argv[3];

try {
  const fileContents = await readFile(sourceFilePath, 'utf-8');
  await writeFile(destinationFilePath, fileContents);
  console.log('Copied');
} catch (error) {
  console.error('Error copying file:', error);
}
