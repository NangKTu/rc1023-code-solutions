import { evenNumbers, toDollars, divideBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 6, 22, 15, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([6, 22, 0]);
  });
});

describe('toDollars', () => {
  it('returns number in 2 decimal places', () => {
    const amount = 13;
    const result = toDollars(amount);
    expect(result).toEqual(`$13.00`);
  });
  it('returns number in 2 decimal places with a number at 10000th decimal place.', () => {
    const amount = 18.8888;
    const result = toDollars(amount);
    expect(result).toEqual(`$18.89`);
  });
});

describe('divideBy', () => {
  it('divides each element by the divisor', () => {
    const inputArray = [10, 20, 30];
    const divisor = 5;
    const result = divideBy([...inputArray], divisor);

    expect(result).toEqual([2, 4, 6]);
  });
});
