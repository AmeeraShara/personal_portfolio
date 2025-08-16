import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact">
    <h2>Contact Me</h2>
<p>
  If you’d like to get in touch, feel free to reach out through any of the following channels. 
  I am always happy to discuss exciting opportunities, collaborate on projects, share ideas, or simply connect with 
  like-minded professionals. Whether it’s a technical query, a potential partnership, freelance work, or just a friendly hello, 
  I’d love to hear from you!
</p>

    <div className="contact-table">
      <div className="contact-row">
        <span>📧 Email</span>
        <a href="mailto:ameerashara12@gmail.com" target="_blank" rel="noopener noreferrer">
          ameerashara12@gmail.com
        </a>
      </div>

      <div className="contact-row">
        <span>📱 Phone</span>
        <a href="tel:+94771234567" target="_blank" rel="noopener noreferrer">
          +94 77 123 4567
        </a>
      </div>

      <div className="contact-row">
        <span>🔗 LinkedIn</span>
        <a href="https://linkedin.com/in/AmeeraShara" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/AmeeraShara
        </a>
      </div>

      <div className="contact-row">
        <span>💻 GitHub</span>
        <a href="https://github.com/AmeeraShara" target="_blank" rel="noopener noreferrer">
          github.com/AmeeraShara
        </a>
      </div>

      <div className="contact-row">
        <span>📍 Location</span>
        <span>Kandy, Sri Lanka</span>
      </div>
    </div>

    <p className="contact-note">
      I am always open to discussing new opportunities, collaborations, or freelance projects. Let’s connect and build something amazing together!
    </p>
  </section>
);

export default Contact;
