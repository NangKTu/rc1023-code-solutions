import { readFile } from 'node:fs/promises';

try {
  const filenames: string[] = process.argv.slice(2);

  // Use Promise.all to read the contents of all files concurrently
  const fileContents: string[] = await Promise.all(
    filenames.map(async (filename) => {
      return await readFile(filename, 'utf8');
    })
  );

  // Concatenate the contents and print to the terminal
  const combinedContent: string = fileContents.join('');
  console.log(combinedContent);
} catch (error) {
  console.error('Error reading files:', error);
}
