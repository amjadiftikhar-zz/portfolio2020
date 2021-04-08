import React from 'react';
import {Container} from "reactstrap";
import Style from "./education.style";
import {FaGraduationCap, FaCertificate} from "react-icons/fa";

function Education() {
    return (
        <Style>
        <Container className="mainContainer" data-testid='education'>
            <h3 className="eduTitle">
                <FaGraduationCap className="educationIcon" />
                Education
            </h3>
            <h4 className="subTitle">Full Stack Web Development</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p className="pItalic">Institute</p>
                    <h5>Hack Your Future Copenhagen</h5>
                    <p className="pItalic">Acquired skills are, HTML/CSS, 
                        JavaScript, <br/>Node JS, MySql og React</p>
                    <p className="pItalic">08/2019 – 04/2020</p>                    
                </div>
                <div className="educationContents">
                    <div>
                        <p className="pItalic">Copenhagen, Denmark</p>                        
                    </div>
                </div>  
            </div>
            <h4 className="subTitle">Masters in Computer Systems Engineering</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p className="pItalic">Institute</p>
                    <h5 className="subTitle">Halmstad University</h5>
                    <p className="pItalic">01/2008 – 03/2010</p>                    
                </div>
                <div className="educationContents">
                    <div>
                        <p className="pItalic">Halmstad, Sweden</p>                        
                    </div>
                </div>  
            </div>
            <h4 className="subTitle">Bachelor's in Computer Science</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p className="pItalic">Institute</p>
                    <h5 className="subTitle">AIOU Islamabad</h5>
                    <p className="pItalic">09/2000 – 03/2005</p>                    
                </div>
                <div className="educationContents">
                    <div>
                        <p className="pItalic">Islamabad, Pakistan</p>                        
                    </div>
                </div>  
            </div>
            <h3 className="eduTitle">
                <FaCertificate style={{marginRight:"0.6vw", fontSize:"1.6vw"}}/>
                Certifications
            </h3>            
            <h4 className="subTitle">
                Microsoft Certified Professional, MCP ID: 8074395
            </h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p className="pItalic">Institute</p>
                    <h5 className="subTitle">Microsoft</h5>
                    <p className="pItalic">MCSE, MCSA, MCP and 
                        MCTS (windows 2007))</p>
                </div>
                <div className="educationContents">
                    <div>
                        <p className="pItalic">Islamabad, Pakistan</p>                        
                    </div>
                </div>  
            </div>
            <h4 className="subTitle">
                Cisco Academic Certifications
            </h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p className="pItalic"> Institute</p>
                    <h5 className="subTitle">Cisco Academy, Halmstad</h5>
                    <p className="pItalic"> CCNP 
                        (Cisco Certified Network Professional)</p>
                    <p className="pItalic">CCNA 
                        (Cisco Certified Network Associate)</p>
                </div>
                <div className="educationContents">
                    <div>
                        <p className="pItalic">Halmstad, Sweden</p>                        
                    </div>
                </div>  
            </div>
        </Container>
        </Style>
    )
}

export default Education;
