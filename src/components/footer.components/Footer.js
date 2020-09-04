import React from 'react';
import Style from "./footer.style";
import {FaCopyright, FaRegSmile, FaLinkedin, FaGithubSquare, 
    FaFacebookSquare, FaTwitterSquare} from "react-icons/fa"

function Footer() {
    return (
        <Style>
            <footer>
                <div className="allRights">
                    <FaCopyright style={{width:"1.5rem", height:"1.5rem"}}/>
                    <span>
                        All rights reserved<FaRegSmile 
                        style={{marginLeft:"0.3rem", color:"yellow"}}
                        />
                    </span>
                </div> 
                <div className="socialMediaLinks">
                    <a className="classIcon" href="https://www.linkedin.com/in/amjad-iftikhar-545aa331/">
                        <FaLinkedin className="classIcon" />
                    </a>
                    <a className="classIcon" href="https://github.com/amjadiftikhar">
                        <FaGithubSquare className="classIcon" />
                    </a>
                    <a className="classIcon" href="https://www.facebook.com/Parati4mg/">
                        <FaFacebookSquare className="classIcon"/>
                    </a>
                    <a className="classIcon" href="https://twitter.com/parati_4mg">
                        <FaTwitterSquare className="classIcon"/>
                    </a>
                </div>               
            </footer>
        </Style>
    )
}

export default Footer;
