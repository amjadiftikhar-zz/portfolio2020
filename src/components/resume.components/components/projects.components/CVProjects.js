import React from 'react'
import CVProjectCard from './CVProjectCard';
import "./cvProjects.styles.css";

const CVProjects = () => {

    return (
        <div className="cvProjectContainer">
            <h3 className='cvProjectTitle'>Projects</h3>
            <CVProjectCard/>
        </div>
    )
}

export default CVProjects;
