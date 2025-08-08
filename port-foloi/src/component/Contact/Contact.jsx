import React from "react";
import { useState } from "react";
import "./Contact.css"; // Importing the CSS file for styling
const Contact = () => {

 const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "33874ec8-9c38-4a3b-b9e4-5ef230e64a7e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    event.target.reset();
  };


  return (
    <div className="contact">
        <div className="contact-Header">
      <h1 className="contact-title">Contact me</h1>
      <p className="contact-subtitle">If you have any questions, feel free to reach out!</p>
        </div>
        <form id="contact-form" onSubmit={onSubmit} className="contact-form">

          
<input type="text" name="name" placeholder="Your Name" required />
<input type="email" name="email" placeholder="Your Email" required />
<textarea name="message" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
    </div>
  );
}

export default Contact;