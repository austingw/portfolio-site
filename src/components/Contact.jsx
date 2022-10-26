import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit() {
    setSubmitted(true);
  }
  return (
    <div className="contact">
      <div className="section-title">
        <h2>Connect</h2>
      </div>
      {submitted ? (
        <p className="thanks-message">
          Thanks for reaching out! I will get back to you as soon as possible.
        </p>
      ) : (
        <ContactForm handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
