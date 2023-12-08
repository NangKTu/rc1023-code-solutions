import { charCounts } from './charCounts';

// Your code goes here
describe('charCounts', () => {
  it('counts occurrences of characters in a string', () => {
    const result = charCounts('pepper');
    expect(result).toEqual({ p: 3, e: 2, r: 1 });
  });
  it('checks that uppercase and lowercase characters are counted together', () => {
    const result = charCounts('PaSseNgEr');
    expect(result).toEqual({ p: 1, a: 1, s: 2, e: 2, n: 1, g: 1, r: 1 });
  });
  it('checks that spaces count as a character', () => {
    const result = charCounts('Hello World');
    expect(result).toEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      ' ': 1,
      w: 1,
      r: 1,
      d: 1,
    });
  });
  it('checks that an empty object gets returned if the string is empty', () => {
    const result = charCounts('');
    expect(result).toEqual({});
  });
});
