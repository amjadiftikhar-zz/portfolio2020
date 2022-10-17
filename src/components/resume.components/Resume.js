import React, {Suspense} from 'react';
import Objective from './components/objective.components/Objective';
import Profile from './components/profile.components/Profile';
import WorkExperience from './components/experience.components/WorkExperience';
import CVProjects from './components/projects.components/CVProjects';
import Skills from './components/skills.components/Skills';
import Certificates from './components/certificates.components/Certificates';
import Languages from './components/language.components/Languages';
import References from './components/references.components/References';
import VolunteerExperience from './components/experience.components/VolunteerExperience';
import EducationExperience from './components/experience.components/EducationExperience';


// import objectData from "../../assets/resume_eng.json";
import objectData from "../../assets/resume_dk.json";

import '../../i18n/i18n';


import './resume.styles.css';

const Resume = () => {

    return (
        <div className='resumeContainer' >
            <div className="leftSection">
                <Profile/>
                <Skills skills={objectData.skills} sectionTitles={objectData.sectionTitles}/>
                <Certificates 
                    certificates={objectData.certificates} 
                    sectionTitles={objectData.sectionTitles} 
                />
                <Languages 
                    languages={objectData.languages} 
                    sectionTitles={objectData.sectionTitles} 
                />
                <References 
                    references={objectData.references} 
                    sectionTitles={objectData.sectionTitles} 
                />
            </div>
            <div className="rightSection">
                <Suspense fallback={<div>Loading...</div>}>
                    <Objective objective={objectData.objective} />
                </Suspense>
                <WorkExperience 
                    experience={objectData.experience} 
                    sectionTitles={objectData.sectionTitles} 
                />
                <VolunteerExperience 
                    volunteerExperience={objectData.volunteerExperience} 
                    sectionTitles={objectData.sectionTitles}
                />
                <CVProjects 
                    projects={objectData.projects} 
                    sectionTitles={objectData.sectionTitles} 
                />
                <EducationExperience 
                    education={objectData.education} 
                    sectionTitles={objectData.sectionTitles} 
                />
            </div>
        </div>
    );
}

export default Resume;
