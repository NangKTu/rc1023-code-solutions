const $countdownDisplay = document.querySelector('.countdown-display');
let count = 4;
function updateHeader() {
  count--;
  $countdownDisplay.textContent = count;
  if (count === 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}

const intervalID = setInterval(updateHeader, 1000);
