import React from 'react';
import Container from "react-bootstrap/Container";
import Style from "./education.style";
import {FaGraduationCap, FaCertificate} from "react-icons/fa";

function Education() {
    return (
        <Style>
        <Container>
            <h3><FaGraduationCap style={{marginRight:"0.4vw"}}/>Education</h3>
            <h4>Full Stack Web Development</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p>Institute</p>
                    <h5>Hack Your Future Copenhagen</h5>
                    <p>Acquired skills are, HTML/CSS, JavaScript, <br/>Node JS, MySql og React</p>
                    <p>08/2019 – 04/2020</p>                    
                </div>
                <div className="educationContents">
                    <div>
                        <p>Copenhagen, Denmark</p>                        
                    </div>
                </div>  
            </div>
            <h4>Masters in Computer Systems Engineering</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p>Institute</p>
                    <h5>Halmstad University</h5>
                    <p>01/2008 – 03/2010</p>                    
                </div>
                <div className="educationContents">
                    <div>
                        <p>Halmstad, Sweden</p>                        
                    </div>
                </div>  
            </div>
            <h4>Bachelor's in Computer Science</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p>Institute</p>
                    <h5>AIOU Islamabad</h5>
                    <p>09/2000 – 03/2005</p>                    
                </div>
                <div className="educationContents">
                    <div>
                        <p>Islamabad, Pakistan</p>                        
                    </div>
                </div>  
            </div>
            <h3>
                <FaCertificate style={{marginRight:"0.4vw", fontSize:"1.6vw"}}/>
                {/* <img src={certificateIcon} alt=""/> */}
                Certifications
            </h3>            
            <h4>Microsoft Certified Professional, MCP ID: 8074395</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p>Institute</p>
                    <h5>Microsoft</h5>
                    <p>MCSE, MCSA, MCP and MCTS (windows 2007))</p>
                </div>
                <div className="educationContents">
                    <div>
                        <p>Islamabad, Pakistan</p>                        
                    </div>
                </div>  
            </div>
            <h4>Cisco Academic Certifications</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p>Institute</p>
                    <h5>Cisco Academy, Halmstad</h5>
                    <p> CCNP (Cisco Certified Network Professional)</p>
                    <p>CCNA (Cisco Certified Network Associate)</p>
                </div>
                <div className="educationContents">
                    <div>
                        <p>Halmstad, Sweden</p>                        
                    </div>
                </div>  
            </div>
        </Container>
        </Style>
    )
}

export default Education
