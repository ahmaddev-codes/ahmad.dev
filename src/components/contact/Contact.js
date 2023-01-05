import { React, useState, useEffect } from "react";
import "../contact/Contact.scss";
import contactProfile from "../../images/bitmoji-5.png";
import Aos from 'aos';

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [textArea, setTextArea] = useState("")

  const handleSubmit = (e) => {
    alert('Form Submitted')
    e.preventDefault();
    setName(" ");
    setEmail(" ");
    setTextArea(" ");
  }

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <h1>Work with Ahmad</h1>
        <h2>Trust me, he's loads of fun to work with</h2>
      </div>

      <div className="contact__details">
        <img
          src={contactProfile}
          alt="contact profile"
          data-aos="fade-right"
          data-aos-once="true"
        ></img>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your Name"
          ></input>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          ></input>
          <textarea
            cols="33"
            rows="6"
            placeholder="Your message here"
            textarea="true"
            value={textArea}
            onChange={e => setTextArea(e.target.value)}
          ></textarea>
          <button disabled={!name} className="submit__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
