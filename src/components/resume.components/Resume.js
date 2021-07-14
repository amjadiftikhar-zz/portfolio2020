import React from 'react';
import Experience from './components/Experience';
import Objective from './components/Objective';
import Profile from './components/profile.components/Profile';

import './resume.styles.css';

const Resume = () => {

    return (
        <div className='resumeContainer'>
            <div className="leftSection">
                <Profile/>
            </div>
            <div className="rightSection">
                <Objective/>
                <Experience/>
            </div>
        </div>
    )
}

export default Resume;
