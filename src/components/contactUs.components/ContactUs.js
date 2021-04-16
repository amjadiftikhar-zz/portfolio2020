import React from 'react';
import emailjs from 'emailjs-com';
import ContactForm from "./ContactForm"

const ContactUs =  () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_yh0l2gh', 'template_5hqobku', 
      e.target, 'user_Ane2n8QteW2k8F4HWdDKu')
      .then((result) => {
        alert('Thank you for reaching out')
        console.log(result.text + 'funciona');
      }, (error) => {
        alert("Please try again!")
        console.log(error.text + 'no funciona');
      });
      e.target.reset();
  }

  return (
    <>
      <ContactForm sendEmail={sendEmail}/>
    </>
  );
}

export default ContactUs;