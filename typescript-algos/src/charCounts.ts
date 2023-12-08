export function charCounts(word: string): { [char: string]: number } {
  const obj: { [char: string]: number } = {};

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
