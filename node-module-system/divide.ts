export function divide(x: number, y: number): number | null {
  if (y === 0) {
    console.log('Cannot divide by zero.');
    return null;
  }
  return x / y;
}
