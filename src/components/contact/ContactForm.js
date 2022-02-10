import { useRef, useState } from 'react';
import './ContactForm.scss';

function ContactForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const textareaRef = useRef();

  const [clicked, setClicked] = useState('');
  // ^ to check  if the form was submited 
  
  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    const enteredMessage = textareaRef.current.value;
    
    const formData = {
      name: enteredName,
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage,
    };

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
      clicked ? setClicked('') : setClicked('confirmation success');
      console.log(response);
    });
  }

  return (
    <section className="contact f-f f-dc f-aic" id="newsletter">
      <div className="special">
        <h2>Contact Us</h2>
        <p>At risus viverra adipiscing at in tellus integer.</p>
      </div>

      <form className="card f-f f-dc f-ais" onSubmit={submitHandler}>
        <div className="f-f f-dr f-jsb f-w">
          <input
            type="text"
            required
            id="name"
            name="name"
            placeholder="Name"
            ref={nameInputRef}
          />
          <input
            type="email"
            required
            id="email"
            name="email"
            placeholder="Email"
            ref={emailInputRef}
          />
        </div>
        <input
          type="text"
          required
          id="subject"
          name="subject"
          placeholder="Subject"
          ref={subjectInputRef}
        />
        <textarea
          name="comments"
          required
          id="comments"
          placeholder="Your message here ..."
          rows="5"
          ref={textareaRef}
        ></textarea>
        <input type="submit" id="submit" value="Send Message" />
        <span className={clicked || 'confirmation' }>Your message was sent!</span>
      </form>
    </section>
  );
}

export default ContactForm;
