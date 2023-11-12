const $button = document.querySelector('button');
console.log($button);
let isBlack = true;

function changeBackground(event) {
  isBlack = !isBlack;
  if (isBlack) {
    document.body.style.backgroundColor = '#FDF4CC';
    document.getElementById('button').style.backgroundColor = '#F9EA83';
  } else {
    document.body.style.backgroundColor = '#111111';
    document.getElementById('button').style.backgroundColor = '#242424';
  }
}
$button.addEventListener('click', changeBackground);
