const $textBody = document.querySelector('.phrase');
const $textPhrase = 'grumpy wizards make toxic brew';
const $span = [];
let letterNum = 0;

for (let i = 0; i < $textPhrase.length; i++) {
  const newElement = document.createElement('span');

  newElement.className = 'text';
  if (i === 0) newElement.classList.add('selected');
  const letter = $textPhrase[i];
  if (letter === ' ') {
    // run nothing
  }
  newElement.textContent = letter;
  $span.push(newElement);
  $textBody.appendChild(newElement);
}

document.addEventListener('keydown', function (event) {
  if (letterNum === $span.length) {
    return;
  }

  const keyPress = event.key;
  const correctKey = $textPhrase[letterNum];
  const currentElement = $span[letterNum];

  if (keyPress === correctKey) {
    currentElement.classList.remove('incorrect');
    currentElement.classList.add('correct');
    currentElement.classList.remove('selected');

    const nextElement = $span[letterNum + 1];
    if (nextElement) nextElement.classList.add('selected');
    letterNum++;
  } else {
    currentElement.classList.add('incorrect');
  }
});
