import React from 'react'
import CVProjectCard from './CVProjectCard';
import "./cvProjects.styles.css";
// import projectsData from '../../../../assets/resume_eng.json';
// import projectsData from '../../../../assets/resume_dk.json';



// const projectData = [
//erokuapp.com/dashboard) for Seasony and tools used are, JavaScript, NodeJS, React, MySql, Knex.js, Storybook, Express, Swagger, HTML and'
//     },
//     {
//         duration: 'Meal Sharing Applicatin (02/2020 - 02/2020)',
//         description: 'Deveped a meal sharing application (https://my-meal-sharing-app.herokuapp.com), using JavaScript, HTML/CSS, MySql, Express, Git, Github, NPM, Webpack skills '
//     }, 
//     {
//         duration: 'Weather Application (11/2019 - 11/2019)',
//         description: 'Weather App where I used my technical skills in JavaScri, REST APIs, HTML and CSS'
//     }    
// ]

const CVProjects = (props) => {

    return (
        <div className="cvProjectSection">
            <h3 className='cvProjectTitle'>{props.sectionTitles[2]}</h3>
            <div className="cvProjectContainer">
                {
                    props.projects.map((p, index) => {
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
    );
}

export default CVProjects;
