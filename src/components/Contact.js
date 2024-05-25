import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";


export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);

    const response = await fetch('https://formspree.io/f/xzbnrzkr', { // Replace with your form action URL
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: data,
    });
    if (response.ok) {
      setFormData({ name: '', email: '', message: '' });
      alert("Thank you for your message! I'll get back to you soon.");
    } else {
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#000';
    e.target.style.color = '#fff';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#fff';
    e.target.style.color = '#000';
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <h4>Please fill out the form to discuss any work opportunities.</h4>
              <form id="contactForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
            </div>
          </Col>
        </Row>
       </Container>
    </section>
  );
};