import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ThankYou from '../Components/ThankYou';

const Contact = ({ isDarkMode }) => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
        .send('service_ljwgc18', 'template_i0vlv1e', formData, 'NlTccOKLc594097u5')
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            setSubmitted(true);

            // Reset the form and state after 5 seconds
            setTimeout(() => {
              setFormData({});
              setDone(false);
              setNotDone(false);
              setSubmitted(false);
            }, 8000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className={`contact-container ${isDarkMode ? 'bg-black' : ''}`}>
      <div className={`contact-card ${isDarkMode ? 'bg-black' : ''}`}>
        {!submitted ? (
          <Container>
            <Row>
              <Col md={6} className={`c-left ${isDarkMode ? 'dark:text-black' : ''}`}>
                <h1>Contact Me</h1>
                <h1 className={`yellow ${isDarkMode ? 'dark:text-black' : ''}`}>Get in Touch</h1>
              </Col>
              <Col md={6} className={`c-right ${isDarkMode ? 'dark:text-black' : ''}`}>
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    name="from_name"
                    className={`user ${isDarkMode ? 'dark:text-black' : ''}`}
                    placeholder="Name"
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="reply_to"
                    className={`user ${isDarkMode ? 'dark:text-black' : ''}`}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <textarea
                    id="des"
                    name="message"
                    className={`user ${isDarkMode ? 'dark:text-black' : ''}`}
                    placeholder="Message"
                    onChange={handleChange}
                  />
                  <span className={`not-done ${isDarkMode ? 'dark:text-white' : ''}`}>
                    {notDone && 'Please, fill all the input fields'}
                  </span>
                  <Button type="submit" className={`button ${isDarkMode ? 'dark-button' : ''}`} disabled={done}>
                    Send
                  </Button>
                  <span className={`done ${isDarkMode ? 'dark:text-black' : ''}`}>
                    {done && <p>Thanks for contacting me!</p>}
                  </span>
                </form>
              </Col>
            </Row>
          </Container>
        ) : (
          <ThankYou />
        )}
      </div>
    </div>
  );
};

export default Contact;
