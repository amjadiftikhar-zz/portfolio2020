import React, { useState } from 'react';
import { Collapse, TabPane, CardBody, Card } from 'reactstrap';
import PrimarySkills from "./PrimarySkills";
import primarySkillsObj from "./primarySkillsObj";
import {AiOutlineFileDone} from "react-icons/ai";
import {GrAdd} from "react-icons/gr";
// import Style from "./skills.style";
import "./skills.style.css"

const skillsArr = ["Javascript", "React","Storybook", "HTML5", "CSS3", "Node JS",  "Express",
 "NPM", "Webpack","MySql", "Github", "Postman", "Heroku"]

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
        // <Style>
            <div className="skillSection">
                <h3><AiOutlineFileDone className="mySkills"/>My Skills</h3>
                <p>I'm a creative problem solver. I build full stack web applications. 
                    Here I have heighlighted my key technical skills that I will bring to your project.
                </p>
                <div className="skillsContentSection">
                    {primarySkillsObj.map(skill => 
                        <PrimarySkills 
                            imageSrc={skill.imageSrc}
                            title={skill.title}
                            description={skill.description}
                        />
                    )}
                </div>
                <TabPane color="primary" onClick={toggle} style={{ marginBottom: '1rem', padding:"1rem", backgroundColor:"#C1BDB5" }}><GrAdd style={{marginRight:"0.5rem"}} />
                    My key Skills
                </TabPane>
                <Collapse isOpen={isOpen}>
                    <div className="skillsList">
                        {skillsArr.map(skill => 
                        <Card border="info" style={{margin:"1.5rem"}} className="col-md- col-sm-2   bg-light offset-md-1"> 
                            <span key={skill} className="sectionElement">
                                {skill}
                            </span>
                        </Card>  
                        )}
                    </div> 
                </Collapse>
            </div>         
        // </Style>
    );
}

export default Skills;

















// import React from 'react';
// import Style from "./skills.style";
// import PrimarySkills from "./PrimarySkills";
// import {Card} from "react-bootstrap";
// import primarySkillsObj from "./primarySkillsObj";
// import {AiOutlineFileDone} from "react-icons/ai";

// const skillsArr = ["Javascript", "React","Storybook", "HTML5", "CSS3", "Node JS",  "Express",
//  "NPM", "Webpack","MySql", "Github", "Heroku"]

// function Skills() {
//     return (
//         <Style>
//             <div className="skillSection">
//                 <h3><AiOutlineFileDone className="mySkills"/>My Skills</h3>
//                 <p>I'm a creative problem solver. I build full stack web applications. 
//                     Here I have heighlighted my key technical skills that I will bring to your project.
//                 </p>
//                 <div className="skillsContentSection">
//                     {primarySkillsObj.map(skill => 
//                         <PrimarySkills 
//                             imageSrc={skill.imageSrc}
//                             title={skill.title}
//                             description={skill.description}
//                         />
//                     )}
//                 </div>
//                 <p>The technologies I have worked with, </p>                                   
//                 <div className="skillsList">
//                     {skillsArr.map(skill => 
//                     <Card border="info" style={{margin:"1.5rem"}} className="col-md- col-sm-2 bg-light offset-md-1"> 
//                         <span key={skill} className="sectionElement">
//                             {skill}
//                         </span>
//                     </Card>  
//                     )}
//                 </div>                
//             </div>         
//         </Style>
//     )
// }

// export default Skills;
