import { isAnagram } from './is-anagram';

// Your code goes here
describe('isAnagram', () => {
  it('should return true when pass in astronomer and moon starer', () => {
    const firstString = 'astronomer';
    const secondString = 'moon starer';
    const result = isAnagram(firstString, secondString);
    expect(result).toBe(true);
  });
  it('should return true when pass in listen and silent', () => {
    const firstString = 'listen';
    const secondString = 'silent';
    const result = isAnagram(firstString, secondString);
    expect(result).toBe(true);
  });
  it('should return false when pass in programmer and poor gamer', () => {
    const firstString = 'programmer';
    const secondString = 'poor gamer';
    const result = isAnagram(firstString, secondString);
    expect(result).toBe(false);
  });
  it('should return false when pass in red dad and rad ede', () => {
    const firstString = 'red dad';
    const secondString = 'rad ede';
    const result = isAnagram(firstString, secondString);
    expect(result).toBe(false);
  });
});
