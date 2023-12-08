import { firstChars } from './first-chars';

// Your code goes here
describe('firstChar', () => {
  it('should return the first character if the length is one', () => {
    const word = 'React';
    const length = 1;
    const result = firstChars(length, word);
    expect(result).toBe('R');
  });
  it('should return the first four characters if the length is four', () => {
    const word = 'JavaScript';
    const length = 4;
    const result = firstChars(length, word);
    expect(result).toBe('Java');
  });
  it('should return the first twenty characters if the length is twenty', () => {
    const word = 'LearningFuze';
    const length = 20;
    const result = firstChars(length, word);
    expect(result).toBe('LearningFuze');
  });
  it('should return the empty string even when length is positive', () => {
    const word = '';
    const length = 5;
    const result = firstChars(length, word);
    expect(result).toBe('');
  });
});
