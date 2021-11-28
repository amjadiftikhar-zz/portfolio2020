import React from 'react'
import SkillCard from './SkillCard';
import './skill.styles.css';

import skillsData from '../../../../assets/resume_eng.json';
// import skillsData from '../../../../assets/resume_dk.json';

const Skills = () => {
    // const skillsData = [  'HTML', 
    // 'p', 'Stor ''Swagge',
    // 'TDD', 'Prettier', 'Git', 'Github', 'Heroku']

    return (
        <div className="cvSkillSection">
            <h3 className='cvSkillsTitle'>{skillsData.sectionTitles[4]}</h3>
            <div className="cvSkillsContainer">
                {skillsData.skills.map((s, index) => {
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