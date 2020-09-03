import React from 'react';
import {Container} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import profilePic from "../../images/profilePic.png";
import githubIcon from "../../images/github.png";
import linkedinIcon from "../../images/linkedin.png";
import LandingPageStyle from "./landingPage.style";
import Typical from "react-typical";

function LandingPageComponent() {
    return (
        <LandingPageStyle>
        <Container className="container-fluid">
        <div className="homeTopSection">
            <div className="leftSection"  >
                <Image className="profilePic" src={profilePic} roundedCircle/>
                <h6>Amjad Iftikhar</h6>
                <div className="classContact">
                    <a href="https://www.linkedin.com/in/amjad-iftikhar-545aa331/">
                        <img className="socialMediaIcons" src={linkedinIcon} alt=""/>
                    </a>
                    <a href="https://github.com/amjadiftikhar"> 
                        <img className="socialMediaIcons" src={githubIcon} alt=""/>
                    </a>
                </div>                
            </div>
            <div className="rightSection">                
                <div className="imageSection">
                    <div className="firstNameLastName">
                        <span className="firstName">Amjad</span>
                        <span className="lastName">Iftikhar</span>
                    </div>
                    <p className="textAnimation" > I'm a {' '}
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={["Full Stack Developer", 1000, "Freelancer", 1000 ,
                                    1000, "energetic", "motivated person", 1000 ]}
                        />                    
                    </p>
                </div>
                <div className="promptBtn">
                    <a className="projectContactBtn" href="/Projects">Projects</a>
                    <a className="projectContactBtn" href="/Contact">Contact</a>
                </div>                
            </div>
        </div> 
        </Container>       
        </LandingPageStyle>
    )
}

export default LandingPageComponent;