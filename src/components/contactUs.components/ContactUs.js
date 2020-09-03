import React from 'react';
import {Form,Col, Button} from "react-bootstrap"
import emailjs from 'emailjs-com';
// import Style from "./contactUs.style";

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_yh0l2gh', 'template_5hqobku', e.target, 'amjadiftikhar99@gmail.com')
      .then((result) => {
          console.log(result.text + 'funciona');
      }, (error) => {
          console.log(error.text + 'no funciona');
      });
  }
  return (
    <Form onSubmit={sendEmail} style={{width:"30rem", margin:"auto"}}>
      <Form.Label>Number</Form.Label>
      <Form.Control  name="contact_number" />
      <Form.Row>
        <Col>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="enter your name" name="user_name" />
        </Col>
        <Col>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="user_email" />
        </Col>
      </Form.Row>
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" name="message" rows="5"  />
      <Button onClick={sendEmail} style={{ marginTop:"3rem"}} variant="primary" 
          type="submit">Submit
      </Button>
    </Form>
  );
}