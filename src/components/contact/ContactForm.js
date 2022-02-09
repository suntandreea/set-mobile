import './ContactForm.scss';

function ContactForm() {
  const formElem = document.getElementById('contact');
  const inputName = document.getElementById('name');
  const inputEmail = document.getElementById('email');
  const inputSubject = document.getElementById('subject');
  const textarea = document.getElementById('comments');
  const submitBtn = document.getElementById('submit');
  const confirmation = document.getElementById('confirmation');

  function onSubmit(event) {
    event.preventDefault();
    formElem.checkValidity();
    const formData = {
      name: inputName.value,
      email: inputEmail.value,
      subject: inputSubject.value,
      message: textarea.value,
    };

    console.log(formData);

    fetch(
      'https://aqmeter-aab59-default-rtdb.firebaseio.com/contact-form.json',
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => {
      if (confirmation.classList.contains('success')) {
        confirmation.classList.remove('success');
      } else {
        confirmation.classList.add('success');
      }
      console.log(response);
    });
  }

  submitBtn.addEventListener('click', onSubmit);

  return (
    <section className="contact f-f f-dc f-aic" id="newsletter">
      <div className="special">
        <h2>Contact Us</h2>
        <p>At risus viverra adipiscing at in tellus integer.</p>
      </div>

      <form className="card f-f f-dc f-ais" id="contact">
        <div className="f-f f-dr f-jsb f-w">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <input type="text" id="subject" name="subject" placeholder="Subject" />
        <textarea
          name="comments"
          id="comments"
          placeholder="Your message here ..."
          rows="5"
        ></textarea>
        <input type="submit" id="submit" value="Send Message" />
        <span id="confirmation">Your message was sent!</span>
      </form>
    </section>
  );
}

export default ContactForm;
