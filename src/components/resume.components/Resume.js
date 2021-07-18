import React from 'react';
// import Experience from './components/Experience';
import Objective from './components/Objective';
import Profile from './components/profile.components/Profile';
import WorkExperience from './components/experience.components/WorkExperience';
import CVProjects from './components/projects.components/CVProjects';


import './resume.styles.css';
import Skills from './components/skills.components/Skills';
import Certificates from './components/certificates.components/Certificates';

const Resume = () => {

    return (
        <div className='resumeContainer'>
            <div className="leftSection">
                <Profile/>
                <Skills/>
                <Certificates/>
            </div>
            <div className="rightSection">
                <Objective/>
                {/* <Experience/> */}
                <WorkExperience/>
                <CVProjects/>
            </div>
        </div>
    )
}

export default Resume;
