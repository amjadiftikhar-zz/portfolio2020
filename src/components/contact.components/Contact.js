import React from 'react';
import {Container} from "react-bootstrap";
import "./contact.style.css";
import { GrContactInfo } from 'react-icons/gr';
import {MdEmail} from "react-icons/md";
import {FaLinkedin, FaGithubSquare, FaPhoneSquare, 
  FaRegHandPointDown} from "react-icons/fa";
import ContactUs from "../contactUs.components/ContactUs";

const Contact = () => {
  return (
    <Container className="container" data-testid='contactId'>
      <h3 className="title"><GrContactInfo className="contactBookIcon"/> Contact Details</h3>
      <div className="contactContainer">             
        <div className="socialMediaSection">
          <span style={{marginBottom:"1rem"}}>Contact me <FaRegHandPointDown 
          style={{fontSize:"1.7rem"}}/></span>
          <div className="emailClass">
            <p className="contactElements"><MdEmail className="classIcon" /> 
              amjadiftikhar_99@hotmail.com
            </p>
          </div>
          <div className="phoneNumber">
            <p className="contactElements">
              <FaPhoneSquare className="classIcon"/> 
              +45 529 209 45
            </p>
          </div>
          <div className="socialMediaIconClass">
              <a className="classIcon toolTip" 
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/amjad-iftikhar-545aa331/">
                <FaLinkedin className="classIcon" />
                <span className="classTooltip">Linkedin</span>
              </a>
              <a className="classIcon toolTip" 
                target="_blank" rel="noopener noreferrer"
                href="https://github.com/amjadiftikhar">
                <FaGithubSquare className="classIcon" />
                <span className="classTooltip">Github</span>
              </a>
          </div>
        </div>
        <div className="contactFormSection">
          <ContactUs/>
        </div>
      </div>
      <div className="navigationBtn">
        <a className="previousBtn" href="/experience">Back</a>
        <a className="previousBtn" href="/">Home</a>
      </div>
    </Container>
  );
}

export default Contact;
