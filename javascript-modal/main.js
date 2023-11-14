function toggle() {
  const $overlay = document.querySelector('.overlay');
  if ($overlay.style.display === 'none') {
    $overlay.style.display = 'flex';
  } else {
    $overlay.style.display = 'none';
  }
}

const $blueBtn = document.querySelector('#openmodal');
$blueBtn.addEventListener('click', toggle);

function toggleNO() {
  const $overlay = document.querySelector('.overlay');
  if ($overlay.style.display === 'flex') {
    $overlay.style.display = 'none';
  } else {
    $overlay.style.display = 'flex';
  }
}

const $redBtn = document.querySelector('#no');
$redBtn.addEventListener('click', toggleNO);
