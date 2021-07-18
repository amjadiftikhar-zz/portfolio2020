import React from 'react'
import SkillCard from './SkillCard';
import './skill.styles.css';

const Skills = () => {

    const skillsData = ['Javascript', 'Typescript', 'React', 'Nodejs', 'HTML', 'CSS', 
    'MySql', 'Knex', 'jQuery', 'NPM', 'Express', 'Storybook', 'Firebase', 'Swagger',
    'TDD', 'Prettier', 'Git', 'Github', 'Heroku']

    return (
        <div className="cvSkillSection">
            <h3 className='cvSkillsTitle'>Projects</h3>
            <div className="cvSkillsContainer">
                {skillsData.map((s, index) => {
                return( 
                        <SkillCard 
                            skill={s}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;