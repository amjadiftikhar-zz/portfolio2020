import React from 'react'
import CVProjectCard from './CVProjectCard';
import "./cvProjects.styles.css";

const projectData = [
    {
        duration: 'Movie Catalogue (10/2020 - 10/2020)',
        description: 'Application built in React using Star Wars API to show movies and movie characters as well as character specs. Tool used are, Javascript, React, HTML, CSS and API, Git, Github.'
    }    
]

const CVProjects = () => {

    return (
        <div className="cvProjectSection">
            <h3 className='cvProjectTitle'>Projects</h3>
            <div className="cvProjectContainer">
                {
                    projectData.map((p, index) => {
                        return(
                            <CVProjectCard
                                key={index}
                                contentDuration={p.duration}
                                contentDescription={p.description}
                            />
                        )
                    })
                } 
            </div>           
        </div>
    )
}

export default CVProjects;
