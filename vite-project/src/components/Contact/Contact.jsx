import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";

const contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>kimberleypaladini@gmail.com</h5>
            <a href="mailto: kimberleypaladini@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdEmail />
            <h4>WhatsApp</h4>
            <h5>+32487020191</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+32487020191"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default contact;
