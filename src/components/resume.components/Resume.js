import React from 'react';
// import Experience from './components/Experience';
import Objective from './components/Objective';
import Profile from './components/profile.components/Profile';
import WorkExperience from './components/experience.components/WorkExperience';
import CVProjects from './components/projects.components/CVProjects';


import './resume.styles.css';
import Skills from './components/skills.components/Skills';
import Certificates from './components/certificates.components/Certificates';
import Languages from './components/language.components/Languages';
import References from './components/references.components/References';

const Resume = () => {

    return (
        <div className='resumeContainer'>
            <div className="leftSection">
                <Profile/>
                <Skills/>
                <Certificates/>
                <Languages/>
                <References/>
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
