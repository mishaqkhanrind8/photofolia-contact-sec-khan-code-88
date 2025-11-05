 const form = document.getElementById('contact-form');
  const message = document.querySelector('.submit-message');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // form reload na ho
    message.classList.add('show'); // show message

    // 5 second baad hide kar do
    setTimeout(() => {
      message.classList.remove('show');
    }, 5000);

    // optional: form reset kar do
    form.reset();
  });