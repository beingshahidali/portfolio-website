import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ThankYou from '../Components/ThankYou';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false); // Track form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          'service_ljwgc18',
          'template_f1zslhs',
          form.current,
          'NlTccOKLc594097u5'
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            setSubmitted(true); // Set submitted to true after successful submission
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        {!submitted ? ( // Render the form if not submitted
          <Container>
            <Row>
              <Col md={6} className="c-left">
                <h1>Contact Me</h1>
                <h1 className="yellow">Get in Touch</h1>
                
              </Col>
              <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    name="from_name"
                    className="user"
                    placeholder="Name"
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="reply_to"
                    className="user"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <textarea
                    id="des"
                    name="message"
                    className="user"
                    placeholder="Message"
                    onChange={handleChange}
                  />
                  <span className="not-done">
                    {notDone && 'Please, fill all the input fields'}
                  </span>
                  <Button type="submit" className="button" disabled={done}>
                    Send
                  </Button>
                  <span className="done">{done && <p>Thanks for contacting me!</p>}</span>
                </form>
              </Col>
            </Row>
          </Container>
        ) : (
          // Render the ThankYou component if submitted
          <ThankYou />
        )}
      </div>
    </div>
  );
};

export default Contact;
