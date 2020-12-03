import React, { useState } from 'react';
import {Container, Card } from 'reactstrap';
import PrimarySkills from "./PrimarySkills";
import primarySkillsObj from "./primarySkillsObj";
import {AiOutlineFileDone} from "react-icons/ai";
import Style from "./skills.style";

const Skills = () => {
    
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
        <Style>
            <Container style={{marginTop:"3rem"}}>
            <div className="skillSection">
                <h3><AiOutlineFileDone className="mySkills"/>My Skills</h3>
                <p>I'm a creative problem solver. I build full stack web 
                    applications. Here I have heighlighted my key technical 
                    skills that I will bring to your project.
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
            </div> 
            </Container>        
        </Style>
    );
}

export default Skills;