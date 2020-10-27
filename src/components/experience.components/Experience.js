import React from 'react';
import Container from "react-bootstrap/Container";
import "./experience.style.css";
import {BsBriefcaseFill} from "react-icons/bs";

function Experience() {
    
    return (
        <Container style={{marginTop:"10rem", transition: '2s ease-out'}}>
            <h3>
            <BsBriefcaseFill style={{marginRight:"0.6vw", fontSize:"1.6vw"}}/>
                Work Experience</h3>
            <h4>Student Volunteer</h4>
            <div className="experienceSection">
                <div className="experienceContents">
                    <p className="pItalic">Organization</p>
                    <h5>Hack Your Future Copenhagen</h5>
                    <p>08/2019 – Present</p>                    
                </div>
                <div className="experienceContents">
                    <div>
                        <p className="pItalic">
                            Copenhagen, Denmark
                        </p>
                    </div>
                </div>  
            </div>
            <h4>Cab Driver</h4>
            <div className="experienceSection">
                <div className="experienceContents">
                    <p className="pItalic">Company</p>
                    <h5>Taxa 4x35 Copenhagen</h5>
                    <p className="pItalic">02/2014 – 05/2020</p>                    
                </div>
                <div className="experienceContents">
                    <div>
                        <p className="pItalic">
                            Copenhagen, Denmark
                        </p>
                    </div>
                </div>  
            </div>
            <h4>Transcriber & IT Supporter</h4>
            <div className="experienceSection">
                <div className="experienceContents">
                    <p className="pItalic">Company</p>
                    <h5>SpaceTech Medical Transcription <br/> Company Pvt.Ltd</h5>
                    <p className="pItalic">04/2006 – 05/2007</p>                    
                </div>
                <div className="experienceContents">
                    <div>
                        <p className="pItalic">
                            Rawalpindi, Pakistan
                        </p>                            
                    </div>
                </div>  
            </div> 
        </Container>  
    )
}

export default Experience;
