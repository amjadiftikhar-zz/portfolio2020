import React from 'react';
import {Container} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import profilePic from "../../images/profilePic.png";
import Typical from "react-typical";
import "./landingPage.style.css";

function LandingPageComponent() {
    return (
        <Container className="landingPage" style={{marginTop:"12rem"}} 
            className="container-fluid">
            <div className="homeTopSection">
                <div className="topImageSection"  >
                    <Image className="profilePic" src={profilePic} 
                    roundedCircle/>    
                </div>
                <div className="lowerSection">                
                    <div className="imageSection">
                        <div className="firstNameLastName">
                            <span className="firstName">Amjad</span>
                            <span className="lastName">Iftikhar</span>
                        </div>
                        <p className="textAnimation" > I'm a {' '}
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    "Full Stack Developer", 1000, 
                                    "Freelancer", 1000,  "Frontend developer",
                                    1000,"React developer", 1000 
                                ]}
                            />                    
                        </p>
                    </div>
                    <div className="promptBtn">
                        <a className="projectContactBtn" href="/Projects">
                            Projects
                        </a>
                        <a className="projectContactBtn contactBtn" href="/Contact">
                            Contact
                        </a>
                    </div>                
                </div>
            </div> 
        </Container> 
    )
}

export default LandingPageComponent;