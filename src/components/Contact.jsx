import React from "react";
import "../styles/Contact.css";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-methods">
        <a
          href="https://wa.me/213558244890"  
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="contact-icon" />
          <span>WhatsApp</span>
        </a>

        <a
          href="mailto:meriemchakhoum@gmail.com" 
          className="contact-card"
        >
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/meriemc/" 
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
