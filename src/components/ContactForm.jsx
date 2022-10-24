import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_37j55pa",
        "portfolio_contact",
        form.current,
        "3e3kYjqOVyYDRHFlI"
      )
      .then(
        (result) => {
          console.log(result.text);
          props.handleSubmit();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <h4 className="form-title">
        <b>Fill out the form below to contact us:</b>
      </h4>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Enter your first and last name"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Enter a valid email address"
        />
        <label>Message</label>
        <textarea
          name="message"
          required
          placeholder="Enter your message here"
        />
        <div className="form-btn">
          <button type="submit" value="Send">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
