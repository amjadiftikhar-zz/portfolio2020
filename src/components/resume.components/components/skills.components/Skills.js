import React from 'react'
import SkillCard from './SkillCard';
import './skill.styles.css';

// import skillsData from '../../../../assets/resume_eng.json';
// import skillsData from '../../../../assets/resume_dk.json';

const Skills = (props) => {
    // const skillsData = [  'HTML', 
    // 'p', 'Stor ''Swagge',
    // 'TDD', 'P

    return (
        <div className="cvSkillSection">
            <h3 className='cvSkillsTitle'>{props.sectionTitles[4]}</h3>
            <div className="cvSkillsContainer">
                {/* {skillsData.skills.map((s, index) => { */}
                {props.skills.map((s, index) => {
                return( 
                        <SkillCard 
                            skill={s}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Skills;