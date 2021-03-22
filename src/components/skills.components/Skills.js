import React, { useState } from 'react';
import {Container, Card } from 'reactstrap';
import SkillsCard from "./SkillsCard";
import primarySkillsData from "../../assets/data.json";
import skills from "../../assets/data.json";
import {AiOutlineFileDone} from "react-icons/ai";
import {PieChart} from "../../components/chart.components/PieChart";
import Style from "./skills.style";  

const Skills = () => {
      
    const [data, setData] = useState(skills.keySkills)
    
    return (
        <Style>
            <Container style={{marginTop:"3rem"}} data-testid='skills'>
            <div className="skillSection">
                <h3><AiOutlineFileDone className="mySkills"/>My Skills</h3>
                <p>I'm a creative problem solver. I build full stack web 
                    applications. Here I have heighlighted my key technical 
                    skills that I will bring to your project.
                </p>
                <div className="skillsContentSection">
                    {primarySkillsData.primarySkills.map((skill, index) => 
                        <SkillsCard 
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