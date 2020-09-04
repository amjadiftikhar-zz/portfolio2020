import React from 'react';
import emailjs from 'emailjs-com';
import ContactForm from "./ContactForm"

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_yh0l2gh', 'template_5hqobku', 
      e.target, 'user_Ane2n8QteW2k8F4HWdDKu')
      .then((result) => {
          console.log(result.text + 'funciona');
      }, (error) => {
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