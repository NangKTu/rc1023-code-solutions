# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  for debugging
- What is a "model"?
  a way to represents structure of a webpage as a tree of objects
- Which "document" is being referred to in the phrase Document Object Model?
  webpage or html
- What is the word "object" referring to in the phrase Document Object Model?
  the elements or contents of html
- What is a DOM Tree?
  a hierachical representation of all elements and contents in a html document
- Give two examples of `document` methods that retrieve a single element from the DOM.
  getElement or querySelector
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll
- Why might you want to assign the return value of a DOM query to a variable?
  so we can call on the variable
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  so browser can render everything else in html first
- What does `document.querySelector()` take as its argument and what does it return?
  it takes one css selector as argument. It returns first element that matches the selector and null if none is found
- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes one css selector as argurment. It return a NodeList containing all elements.

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
