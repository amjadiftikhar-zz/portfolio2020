import React from 'react';
import {Container} from "react-bootstrap";
import Style from "./contact.style";
import { GrContactInfo } from 'react-icons/gr';
import {MdEmail} from "react-icons/md";
import {FaLinkedin, FaGithubSquare, FaPhoneSquare, 
  FaFacebookSquare, FaTwitterSquare} from "react-icons/fa"
import ContactUs from "../../components/contactUs.components/ContactUs"  


export default function Contact() {
  return (
    <Style>
    <Container>
      <h3><GrContactInfo className="contactBookIcon" /> Contact Details</h3>
      <ContactUs/>
      <div className="classContacts">
        <div className="classContents">
          <a className="classIcon toolTip" href="mailto:amjadiftikhar_99@hotmail.com">
              <MdEmail className="classIcon" />
            <span>Email</span>
            <span className="classTooltip">amjadiftikhar_99@hotmail.com</span>            
          </a>
        </div>
        <div className="classContents"> 
          <a className="classIcon" href="https://www.linkedin.com/in/amjad-iftikhar-545aa331/">
            <FaLinkedin className="classIcon" />
            <span>Linkedin</span>           
          </a>
        </div>
        <div className="classContents">
          <a className="classIcon" href="https://github.com/amjadiftikhar">
            <FaGithubSquare className="classIcon" />
            <span>Github</span>             
          </a>
        </div>
        <div className="classContents">
          <a className="classIcon toolTip" href="#">
            <FaPhoneSquare className="classIcon"/>
            <span>Phone</span> 
            <span className="classTooltip">+45 52 92 09 45</span>
          </a>
        </div>
        <div className="classContents">
          <a className="classIcon" href="https://www.facebook.com/Parati4mg/">
            <FaFacebookSquare className="classIcon"/>
            <span>Facebook</span> 
          </a>
        </div>
        <div className="classContents">
          <a className="classIcon" href="https://twitter.com/parati_4mg">
            <FaTwitterSquare className="classIcon"/>
            <span>Twitter</span> 
          </a>
        </div>
      </div>
    </Container>
    </Style>
  );
}
