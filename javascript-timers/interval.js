const $countdownDisplay = document.querySelector('.countdown-display');
let count = 4;
function updateHeader() {
  $countdownDisplay.textContent = count;

  if (count === 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
  count--;
}

const intervalID = setInterval(updateHeader, 1500);
