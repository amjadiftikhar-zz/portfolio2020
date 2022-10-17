import React from 'react';
import TaskDescription from './TaskDescription';
// import {experienceData} from './WorkExperience';
import './workExperience.styles.css';

// const taskDetailsData = [ 
//     [
//         'Responsible for the frontend tasks related to building a platform that hosts different tools for R & D',
//         ' Planning and setting up frontend architecture, diagnosing, troubleshooting and resolving technical issues',
//         'Developing design and collabration with the design team',
//         'Making reusable components and writing test using React testing library'
//     ],
//     [
//         'Responsible for developing the design also help designing the platform',
//         'Implementation from concept through deployment, with a responsive, mobile first approach',
//         'Refactoring and decomposing exiting code and structure',
//         'Perform code reviews, coordinating with designers and development team',
//         'Diagnosing, troubleshooting and resolving technical issues'
//     ],
// ]

const ExperienceCard = (props) => {

    // console.log()

    return (
        <div className='experienceMainCard'>
            {/* <h4 className='jobTitle'>Frontend Developer</h4> */}
            <h4 className='cvExJobTitle'> {props.jobTitle} </h4>
            {/* <h2 className='companyNameTitle'>Molecular Quantum Solutions</h2> */}
            <h2 className='companyNameTitle'> {props.companyName} </h2>
            <div className="jobDetailSection">
                <div className='jobDetails'>
                    <div className='timePeriod'>
                        {/* <span className='details'>01/01/2021 - Present</span> */}
                        <span className='details'> {props.duration} </span>
                        {/* <span className='details'>Tasks:</span> */}
                        <span className='details'> {props.task} </span>
                    </div>
                    {/* <span className='details'>Søborg, Denmark</span> */}
                    <span className='details'> {props.companyLocation} </span>
                </div>
                <div className="taskDetails">
                    <ul className="taskDescription">
                        {props.data && props.data.map((td, index) => {
                            return(
                                <TaskDescription
                                    key={index}
                                    taskDescription={td}
                                />
                            )
                        })}
                        {/* <li>
                            platform tsts diferetools for R & D
                        </li>
                        <li>
                            Planning and setting p frontend architecture, diagnosing, 
                            troubleshooting and resolving technical issues
                        </li>
                        <li>
                            Developing design and collaboration with the design team
                        </li>
                        <li>
                            Making reusable components and writing test using React testing library
                        </li>*/}

                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;
