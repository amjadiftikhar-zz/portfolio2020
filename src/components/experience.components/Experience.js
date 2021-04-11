import React from 'react';
import Container from "react-bootstrap/Container";
import "./experience.style.css";
import {BsBriefcaseFill} from "react-icons/bs";

const Experience = () => {
    
    return (
        <Container className="mainContainer" data-testid='experience'>
            <h3 className="experienceHeader">
                <BsBriefcaseFill className="experienceIcon"/>
                Work Experience
            </h3>
            <h4 className="jobTitle">Frontend Developer</h4>
            <div className="experienceSection">
                <div className="experienceContents">
                    <p className="pItalic">Organization</p>
                    <h5 className="companyName">Molecular Quantum Solutions</h5>
                    <p>01/2020 – Present</p>                    
                </div>
                <div className="experienceContents">
                    <div>
                        <p className="pItalic">
                            Søborg, Denmark
                        </p>
                    </div>
                </div>  
            </div>
            <h4 className="jobTitle">Frontend Developer (Intern)</h4>
            <div className="experienceSection">
                <div className="experienceContents">
                    <p className="pItalic">Organization</p>
                    <h5 className="companyName">Unifounder</h5>
                    <p>11/2020 – 01/2021</p>                    
                </div>
                <div className="experienceContents">
                    <div>
                        <p className="pItalic">
                            Frederiksberg, Denmark
                        </p>
                    </div>
                </div>  
            </div>
            <h4 className="jobTitle">Student Volunteer</h4>
            <div className="experienceSection">
                <div className="experienceContents">
                    <p className="pItalic">Organization</p>
                    <h5 className="companyName">Hack Your Future Copenhagen</h5>
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
            <h4 className="jobTitle">Cab Driver</h4>
            <div className="experienceSection">
                <div className="experienceContents">
                    <p className="pItalic">Company</p>
                    <h5 className="companyName">Taxa 4x35 Copenhagen</h5>
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
            <h4 className="jobTitle">Transcriber & IT Supporter</h4>
            <div className="experienceSection">
                <div className="experienceContents">
                    <p className="pItalic">Company</p>
                    <h5 className="companyName">SpaceTech Medical Transcription <br/> 
                        Company Pvt.Ltd</h5>
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
