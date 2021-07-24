import React from 'react';
import Title1 from './titles.components/Title1';
import './resume.styles.css';

const Objective = () => {
    return (
        <div className="objectiveSection">
            <Title1 title='Amjad Iftikhar' />
            <h3 className="jobTitle">Frontend Developer</h3>
            <p className='objectiveText'>
                Curious and talented developer with a flair for creating elegant 
                solutions in the least amount of time and have passion for responsive 
                website design as well as a firm believer in the mobile-first approach. 
                Have contributed in different projects to learn new development techniques 
                and very passionate about new fields in the domain of tech and development.
            </p>
        </div>
    )
}

export default Objective;
