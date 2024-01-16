import { convertTemperature } from './convertTemperature';

// Your code goes here
describe('convertTemperature', () => {
  it('should successfully converts to Kelvin', () => {
    const result1 = convertTemperature(36.5);
    const result2 = convertTemperature(122.11);
    expect(result1[0]).toBeCloseTo(309.65, 1);
    expect(result2[0]).toBeCloseTo(395.26, 1);
  });
  it('should successfully converts to Fahrenheit', () => {
    const result1 = convertTemperature(36.5);
    const result2 = convertTemperature(122.11);
    expect(result1).toEqual([expect.any(Number), 97.7]);
    expect(result2).toEqual([expect.any(Number), 251.798]);
  });
  it('calculates Kelvin and Fahrenheit when Celsius is 0', () => {
    const result = convertTemperature(0);
    expect(result).toEqual([273.15, 32]);
  });
});
