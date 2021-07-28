import React from 'react';
import ExperienceCard from './ExperienceCard';
import './workExperience.styles.css';
import educationData from '../../../../assets/resume_eng.json';


// export const educationData = [
//     { 
//         jobTitle:'Full Stack Developer Program',
//         companyName: 'Hack Your Future-Copenhagen',
//         duration: '08/2019 - 04/2020',
//         task: 'Courses:',
//         companyLocation: 'Copenhagen, Denmark',
//         taskDetails: [
//             'Javascript, React, Nodejs, HTML, CSS, mySql',
//         ]
//     },
//     {
//         jobTitle:'Masters in Computer Systems Engineering',
//         companyName: 'Halmstad University',
//         duration: '01/2008 - 03/2010',
//         task: 'Courses:',
//         companyLocation: 'Halmstad, Sweden',
//         taskDetails: [
//             'Advanced Routing, Multilayer Switching'
//         ],
//     },
//     {
//         jobTitle:"Bachelor's in Computer Science",
//         companyName: 'AIOU University Islamabad',
//         duration: '09/2000 - 03/2005',
//         task: 'Courses:',
//         companyLocation: 'Islamabad, Pakistan',
//         taskDetails: [
//             'C++, Java, Visual C++, Oracle SQL, VBasic'
//         ],
//     }
// ]

const EducationExperience = () => {

    return (
        <div className="workExperienceContainer">
            <h3 className='experienceTitle'>Education</h3>
            {
                educationData.education.map((e, index) => {
                    return(
                        <ExperienceCard
                            key={index}
                            jobTitle={e.jobTitle}
                            companyName={e.companyName}
                            duration={e.duration}
                            companyLocation={e.companyLocation} 
                            task={e.task} 

                            data={e.taskDetails}                          
                        /> 
                    )                     
                })
            }
        </div>
    );
}

export default EducationExperience;
