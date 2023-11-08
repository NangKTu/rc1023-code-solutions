const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const messageData = {};

  for (const element of $contactForm.elements) {
    if (element.name) {
      messageData[element.name] = element.value;
    }
  }

  console.log('messageData:', messageData);

  $contactForm.reset();
});
