import React from 'react';
import "./footer.style.css";
import {FaCopyright, FaRegSmile, FaLinkedin, FaGithubSquare, 
    FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="allRights">
                <FaCopyright style={{width:"1.5rem", height:"1.5rem"}}/>
                <span>
                    All rights reserved<FaRegSmile 
                    style={{marginLeft:"0.3rem", color:"yellow"}}
                    />
                </span>
            </div> 
            <div className="socialMediaLinks">
                <a className="footerIcon" 
                    href="https://www.linkedin.com/in/amjad-iftikhar-545aa331/">
                    <FaLinkedin className="footerIcon" />
                </a>
                <a className="footerIcon" href="https://github.com/amjadiftikhar">
                    <FaGithubSquare className="footerIcon" />
                </a>
                <a className="footerIcon" href="https://www.facebook.com/Parati4mg/">
                    <FaFacebookSquare className="footerIcon"/>
                </a>
                <a className="footerIcon" href="https://twitter.com/parati_4mg">
                    <FaTwitterSquare className="footerIcon"/>
                </a>
            </div>               
        </footer>
    )
}

export default Footer;
