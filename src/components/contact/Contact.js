import React from "react";
import "../contact/Contact.scss";
import contactProfile from "../../images/bitmoji-5.png";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <h1>Work with Ahmad</h1>
        <h2>Trust me, he's loads of fun to work with</h2>
      </div>

      <div className="contact__details">
        <img src={contactProfile} alt="contact profile"></img>

        <form>
          <input type="text" placeholder="Your Name"></input>
          <input type="email" placeholder="Your Email"></input>
          <textarea
            cols="33"
            rows="6"
            placeholder="Your message here"
            textarea="true"
          ></textarea>
          <button className="submit__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
