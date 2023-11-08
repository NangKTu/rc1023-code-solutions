const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const messageData = {
    name: $contactForm[0].value,
    email: $contactForm.elements[1].value,
    message: $contactForm.elements.message.value,
  };

  console.log('messageData:', messageData);
  $contactForm.reset();
});
