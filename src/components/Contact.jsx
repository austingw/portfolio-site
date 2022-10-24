import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit() {
    setSubmitted(true);
  }
  return (
    <div>
      <h2>Connect</h2>
      {submitted ? (
        <p className="thanks-message">
          Thanks for reaching out! I will get back to you shortly.
        </p>
      ) : (
        <ContactForm handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
