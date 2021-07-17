import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {

    const skillsData = ['Javascript', 'Typescript', 'React', 'Nodejs', 'HTML', 'CSS', 
    'MySql', 'Knex', 'jQuery', 'NPM', 'Express', 'Storybook', 'Firebase', 'Swagger',
    'TDD', 'Prettier', 'Git', 'Github', 'Heroku']

    return (
        <div className="cvSkillsContainer">
            {skillsData.map((s, index) => {
               return( 
                    <SkillCard 
                        skill={s}
                    />
                )
            })}
        </div>
    )
}

export default Skills;