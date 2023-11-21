document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.carousel-image');
  const progressIcons = document.querySelectorAll('.carousel-progress i');
  let currentIndex = 0;
  const intervalId = null;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.remove('hidden');
      } else {
        image.classList.add('hidden');
      }
    });

    progressIcons.forEach((icon, i) => {
      if (i === index) {
        icon.classList.add('fas');
        icon.classList.remove('far');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function startCarousel() {
    setInterval(nextImage, 3000);
  }

  function resetTimer() {
    clearInterval(intervalId);
    startCarousel();
  }

  function previousImageOnClick() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    resetTimer();
  }

  function nextImageOnClick() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    resetTimer();
  }

  const previousArrow = document.querySelector('.previous');
  const nextArrow = document.querySelector('.next');

  previousArrow.addEventListener('click', previousImageOnClick);
  nextArrow.addEventListener('click', nextImageOnClick);

  const progressIconOnClick = function (index) {
    currentIndex = index;
    showImage(currentIndex);
    resetTimer();
  };

  progressIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => progressIconOnClick(index));
  });

  startCarousel();
});
