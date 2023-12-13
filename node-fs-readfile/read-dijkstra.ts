import { readFile } from 'node:fs/promises';

try {
  const data = await readFile('dijkstra.txt', 'utf8');
  console.log('File Contents:', data);
} catch (error) {
  console.error('Error reading file:', error);
}
