const $header = document.querySelector('h1'); // query the DOM for h1
function changeH1() {
  // defined a function to change h1 text content
  $header.textContent = 'Hello There';
}
setTimeout(changeH1, 2000); // set timer to change h1 text content after 2s
