/* exported chunk */
function chunk(array, size) {
  const result = [];
  let currentChunk = [];

  for (let i = 0; i < array.length; i++) {
    currentChunk.push(array[i]);

    if (currentChunk.length === size || i === array.length - 1) {
      result.push([...currentChunk]);
      currentChunk = [];
    }
  }

  return result;
}
