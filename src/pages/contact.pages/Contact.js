import React from 'react';
import {Container} from "react-bootstrap";
import Style from "./contact.style";
// import "./contact.style.js";
import { GrContactInfo } from 'react-icons/gr';
import {MdEmail} from "react-icons/md";
import {FaLinkedin, FaGithubSquare, FaPhoneSquare, 
  FaRegHandPointDown} from "react-icons/fa"
import ContactUs from "../../components/contactUs.components/ContactUs";

export default function Contact() {
  return (
    <Style>
    <Container style={{height: "150vh", marginTop:"10rem"}}>
      <h3><GrContactInfo className="contactBookIcon"/> Contact Details</h3>
      <div className="contactContainer">        
        <div className="socialMediaSection">
          <span style={{marginBottom:"1rem"}}>Contact me <FaRegHandPointDown 
          style={{fontSize:"1.7rem"}}/></span>
          <div className="emailClass">
            <h6><MdEmail className="classIcon" /> amjadiftikhar_99@hotmail.com</h6>
          </div>
          <div className="phoneNumber">
            <h6><FaPhoneSquare className="classIcon"/> +45 529 209 45</h6>
          </div>
          <div className="socialMediaIconClass">
              <a className="classIcon toolTip" 
                href="https://www.linkedin.com/in/amjad-iftikhar-545aa331/">
                <FaLinkedin className="classIcon" />
                <span className="classTooltip">Linkedin</span>
              </a>
              <a className="classIcon toolTip" href="https://github.com/amjadiftikhar">
                <FaGithubSquare className="classIcon" />
                <span className="classTooltip">Github</span>
              </a>
          </div>
        </div>
        <div className="contactFormSection">
          <ContactUs/>
        </div>
      </div>
    </Container>
    </Style>
  );
}
