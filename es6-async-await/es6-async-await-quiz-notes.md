# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The async keyword is used to define a function as asynchronous. The await keyword can only be used inside an async function.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  They result in more readable and maintainable code, especially when dealing with multiple asynchronous operations
- When do you use `async`?
  Use async to run longer multiple programs, since it's not necessary for the application to wait to complete them individually.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Use await when hanlding promises and error handling. Don't use await outside of async funtion.
- How do you handle errors with `await`?
  use try and catch blocks.
- What do `try`, `catch` and `throw` do? When do you use them?
  'try' run the codes that is buggy, 'catch' will look for error, 'throw' will output an exception to the error.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  function will continue its execution without waiting for the Promise to resolve. Promise rejection will be ignore.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await, it looks cleaner.

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
