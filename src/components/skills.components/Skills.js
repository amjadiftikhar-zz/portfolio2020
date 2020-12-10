import React, { useState } from 'react';
import {Container, Card } from 'reactstrap';
import PrimarySkills from "./PrimarySkills";
import primarySkillsObj from "./primarySkillsObj";
import {AiOutlineFileDone} from "react-icons/ai";
import {PieChart} from "../../components/chart.components/PieChart";
import Style from "./skills.style";  

const Skills = () => {

    const skills = [
        {id: 1, tool:"JS", value:50},
        {id: 2,tool:"React", value:50},
        {id: 3,tool:"Node", value:50},
        {id: 4,tool:"TS", value:50},
        {id: 5,tool:"HTML", value:50}, 
        {id: 6,tool:"CSS", value:50},
        {id: 7,tool:"MySql", value:50}
      ];
      
    const [data, setData] = useState(skills)
    
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

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
                    {primarySkillsObj.map((skill, index) => 
                        <PrimarySkills 
                            key={index}
                            imageSrc={skill.imageSrc}
                            title={skill.title}
                            description={skill.description}
                        />
                    )}
                    <PieChart data={data} height={260} width={200}
                        innerRadius={5} outerRadius={100}
                    />
                </div>
            </div> 
            </Container>        
        </Style>
    );
}

export default Skills;