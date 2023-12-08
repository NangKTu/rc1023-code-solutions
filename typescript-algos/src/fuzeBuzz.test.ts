import { fuzeBuzz } from './fuzeBuzz';

// Your code goes here
describe('fuzeBuzz', () => {
  it('should return an array of strings containing all numbers up to & including limit', () => {
    const result = fuzeBuzz(2);
    expect(result).toEqual(['1', '2']);
  });
  it('should verifies that "Learning" gets added to the array if the current number is divisible by 3', () => {
    const result = fuzeBuzz(3);
    expect(result).toEqual(['1', '2', 'Learning']);
  });
  it('should verifies that "Fuze" gets added to the array if the current number is divisible by 5', () => {
    const result = fuzeBuzz(5);
    expect(result).toEqual(['1', '2', 'Learning', '4', 'Fuze']);
  });
  it('should verifies that "LearningFuze" gets added to the array if the current number is divisible by 15', () => {
    const result = fuzeBuzz(15);
    expect(result).toEqual([
      '1',
      '2',
      'Learning',
      '4',
      'Fuze',
      'Learning',
      '7',
      '8',
      'Learning',
      'Fuze',
      '11',
      'Learning',
      '13',
      '14',
      'LearningFuze',
    ]);
  });
});
