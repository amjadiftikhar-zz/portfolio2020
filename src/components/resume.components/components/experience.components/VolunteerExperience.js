import React from 'react';
import ExperienceCard from './ExperienceCard';
import './workExperience.styles.css';
// import volunteerExperienceData from '../../../../assets/resume_eng.json';
// import volunteerExperienceData from '../../../../assets/resume_dk.json';


// export const volunteexperieData = [
//     { 
//tdeveloper.dk/',
//         duratio: '11/20 -
//   ,
//         taskDetails: [
//             'A signle page application, developed in React',
//             'I succssfully compleedgot s from scratch to deployment',
//             'Made reusable components and wrote tests using React testing library',
//         ]
//     },
//     {
//         jobTitle:'Frontend Developer',
//         companyName: 'https://www.mobiletilbud.dk/',
//         duration: '12/2020 - 01/2021',
//         task: 'Tasks:',
//         companyLocation: 'Copenhagen, Denmark',
//         taskDetails: [
//             'Participated developing frontend for the application using HTML and CSS'
//         ],
//     }
// ]

const VolunteerExperience = (props) => {

    return (
        <div className="workExperienceContainer">
            <h3 className='experienceTitle'>{props.sectionTitles[1]}</h3>
            {
                props.volunteerExperience.map((e, index) => {
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

export default VolunteerExperience;
