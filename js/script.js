(() => {
  const htmlElem = document.querySelector('html');
  const menuElem = document.querySelector('.menu');
  const navElem = document.querySelector('nav');
  const menuBtn = document.querySelector('.burger');
  const formElem = document.getElementById('contact');
  const inputName = document.getElementById('name'); 
  const inputEmail = document.getElementById('email'); 
  const inputSubject = document.getElementById('subject'); 
  const textarea = document.getElementById('comments'); 
  const submitBtn = document.getElementById('submit');
  const confirmation = document.getElementById('confirmation');

  window.addEventListener('scroll', () => {
    const scroll = htmlElem.scrollTop;
    const height = window.innerHeight;
    if (scroll > height) {
      menuElem.classList.add('accent');
    } else {
      menuElem.classList.remove('accent');
    }
  });

  menuBtn.addEventListener('click',() => {
    if(navElem.classList.contains('visible')) {
      navElem.classList.remove('visible');
      menuBtn.classList.remove('rotate');
    } else {
      navElem.classList.add('visible');
      menuBtn.classList.add('rotate');
    }
  });

  function onSubmit(event) {
    event.preventDefault();
    formElem.checkValidity();
    const formData = {
      name: inputName.value,
      email: inputEmail.value,
      subject: inputSubject.value,
      message: textarea.value
    };

    // console.log(formData);

    fetch(
      'https://aqmeter-aab59-default-rtdb.firebaseio.com/contact-form.json',
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((response) => {
      if(confirmation.classList.contains('success')) {
        confirmation.classList.remove('success');
      } else {
        confirmation.classList.add('success');
      }
      console.log(response);
    });
  }

  submitBtn.addEventListener('click', onSubmit);
})()