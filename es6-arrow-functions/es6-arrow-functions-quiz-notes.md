# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  const functionName = (parameters) => {}
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  the function implicitly returns the result of the expression on the right side of the arrow.
- When using _concise body syntax_, how do you return an object literal?
  wrap the object literal in parentheses
- In the expression
  `js
    foo(() => 42);
    `

  - Identify the arrow function
    () => 42
  - How many arguments does the arrow function take?

  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    a function

- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  the function is: (y) => {console.log(`4y = ${4 * y}`);}.

      - How many arguments does the arrow function take?

  1 - What value does it return?
  a string - How many arguments are passed to the function `bar`?
  1 - What type of argument is passed to the function `bar`?
  a function - When does the arrow function's code get executed?
  arrow function fires when bar invokes it.

- How does the value of `this` differ between standard functions and arrow functions?
  Arrow functions do not have their own this; they inherit it from the enclosing context.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
