import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const operator = process.argv[3];
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);

let result: number | null;

if (operator === 'plus') {
  result = add(num1, num2);
  console.log(result);
} else if (operator === 'minus') {
  result = subtract(num1, num2);
  console.log(result);
} else if (operator === 'times') {
  result = multiply(num1, num2);
  console.log(result);
} else if (operator === 'divide') {
  result = divide(num1, num2);
  console.log(result);
} else {
  result = null;
  console.log(
    'Invalid operator. Please use "plus", "minus", "times", or "divide".'
  );
}
