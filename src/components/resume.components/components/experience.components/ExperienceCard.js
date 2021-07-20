import React from 'react';
import './workExperience.styles.css';

const ExperienceCard = (props) => {

    return (
        <div className='experienceMainCard'>
            {/* <h4 className='jobTitle'>Frontend Developer</h4> */}
            <h4 className='jobTitle'> {props.jobTitle} </h4>
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
                {/* <div className="taskDetails">
                    <ul className="taskDescription">
                        <li>
                            Responsible for the frontend tasks related to building a 
                            platform that hosts different tools for R & D
                        </li>
                        <li>
                            Planning and setting up frontend architecture, diagnosing, 
                            troubleshooting and resolving technical issues
                        </li>
                        <li>
                            Developing design and collaboration with the design team
                        </li>
                        <li>
                            Making reusable components and writing test using React testing library
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default ExperienceCard;
