# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  It is an object that represents DOM element in which event triggered.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  thanks to event delegation, where event listener is attached to ancestor element and it's child elements.
- What DOM element property tells you what type of element it is?
  tagName property
- What does the `element.closest()` method take as its argument and what does it return?
  track down the nearest ancestor element that meet specific name.
- How can you remove an element from the DOM?
  remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  event delegation

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
