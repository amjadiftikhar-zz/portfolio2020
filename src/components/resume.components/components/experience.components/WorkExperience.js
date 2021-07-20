import { index } from 'd3';
import React from 'react';
import ExperienceCard from './ExperienceCard';
import TaskDescription from './TaskDescription';
import './workExperience.styles.css';

const experienceData = [
    {
        jobTitle:'Frontend Developer',
        companyName: 'Molecular Quantum Solutions',
        duration: '01/01/2021 - Present',
        task: 'Tasks:',
        companyLocation: 'Søborg, Denmark',
        taskDetails: [
            'Responsible for the frontend tasks related to building a platform that hosts different tools for R & D',
            ' Planning and setting up frontend architecture, diagnosing, troubleshooting and        resolving technical issues',
            'Developing design and collaboration with the design team',
            'Making reusable components and writing test using React testing library'
        ]
    }
]

const WorkExperience = () => {

    return (
        <div className="workExperienceContainer">
            <h3 className='experienceTitle'>Work Experience</h3>
            {
                experienceData.map((e, index) => {
                    return(
                        <ExperienceCard
                            key={index}
                            jobTitle={e.jobTitle}
                            companyName={e.companyName}
                            duration={e.duration}
                            task={e.task}
                            companyLocation={e.companyLocation}                            
                        />
                    )
                })
            }
            {
                // console.log('hello', experienceData[0].taskDetails)
            experienceData[0].taskDetails.map((et, index) => {
                return(
                    <TaskDescription
                        taskDescription={et}
                    />
                )
            })
            }            
            
        </div>
    )
}

export default WorkExperience;
