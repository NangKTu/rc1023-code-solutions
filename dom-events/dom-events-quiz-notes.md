# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  debugging and check result
- What is the purpose of events and event handling?
  to track user interactions with webpage
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener
- What is a callback function?
  it is a function that is passed as an argument to another function
- What object is passed into an event listener callback when the event fires?
  the type of event that occurred
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target represents DOM element of event that triggered.
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  first code snippet: handleClick is passed into addEventListener and will be run when addEventListener is executed
  second code snippet: handleClick() will run before addEventlistener

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
