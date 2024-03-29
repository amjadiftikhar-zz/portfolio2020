import React from 'react';
import "./footer.style.css";
import {FaCopyright, FaRegSmile, FaLinkedin, FaGithubSquare, 
    FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";

const Footer = () => {
    
    return (
        <footer className="footer" data-testid='footer'>
            <div className="allRights">
                <FaCopyright className="allRightIcon"/>
                <span>
                    All rights reserved<FaRegSmile className="smiley"
                    style={{marginLeft:"0.3rem", color:"yellow"}}
                    />
                </span>
            </div> 
            <div className="socialMediaLinks">
                <a className="footerIcon" 
                    href="https://www.linkedin.com/in/amjad-iftikhar-545aa331/"
                    rel="noopener noreferrer" target='_blank'
                >
                    <FaLinkedin className="footerIcon" />
                </a>
                <a className="footerIcon" href="https://github.com/amjadiftikhar"
                    rel="noopener noreferrer" target='_blank'
                >
                    <FaGithubSquare className="footerIcon" />
                </a>
                <a className="footerIcon" href="https://www.facebook.com/Parati4mg/"
                    rel="noopener noreferrer" target='_blank'
                >
                    <FaFacebookSquare className="footerIcon"/>
                </a>
                <a className="footerIcon" href="https://twitter.com/parati_4mg"
                    rel="noopener noreferrer" target='_blank'
                >
                    <FaTwitterSquare className="footerIcon"/>
                </a>
            </div>               
        </footer>
    )
}

export default Footer;
