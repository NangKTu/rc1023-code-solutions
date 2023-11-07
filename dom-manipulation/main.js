function buttonClickCounter() {
  let clickCount = 0;
  const hotBtn = document.querySelector('.hot-button');
  const clickCounter = document.querySelector('.click-count');
  hotBtn.addEventListener('click', function () {
    clickCount++;
    clickCounter.textContent = 'Clicks: ' + clickCount;
    if (clickCount <= 4) {
      hotBtn.className = 'hot-button cold';
    } else if (clickCount > 4 && clickCount <= 7) {
      hotBtn.className = 'hot-button cool';
    } else if (clickCount > 7 && clickCount <= 10) {
      hotBtn.className = 'hot-button tepid';
    } else if (clickCount > 10 && clickCount <= 13) {
      hotBtn.className = 'hot-button warm';
    } else if (clickCount > 13 && clickCount < 16) {
      hotBtn.className = 'hot-button hot';
    } else {
      hotBtn.className = 'hot-button nuclear';
    }
  });
}
buttonClickCounter();
