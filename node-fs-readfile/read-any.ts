import { readFile } from 'node:fs/promises';

const filename: string = process.argv[2];
try {
  const data: string = await readFile(filename, 'utf8');
  console.log('File Contents:', data);
} catch (error) {
  console.error('Error reading file:', error);
}
