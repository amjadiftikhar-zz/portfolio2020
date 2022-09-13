import React, {useState, useEffect} from 'react';
import ExperienceCard from './ExperienceCard';
import './workExperience.styles.css';
// import educationData from '../../../../assets/resume_eng.json';
// import educationData from '../../../../assets/resume_dk.json';




// export const educationData 
//tle:'Full Stac Developer Program',
//     ,
// sk: 'Courses:',
//         taskDetails        
//         jobTitle:'Mrs in Cter Systems Engineerin',
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

const EducationExperience = (props) => {

    // const [education, setEducation] = useState(null)
    // const [sectionTitles, setSectionTitles] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9000/education')
    //     .then(response => response.json())
    //     .then(data =>  setEducation(data))

    //     fetch('http://localhost:9000/sectionTitles')
    //     .then(response => response.json())
    //     .then(d =>  setSectionTitles(d))
    // }, [])

    return (
        <div className="workExperienceContainer">
            {/* <h3 className='experienceTitle'>{education.sectionTitles[3]}</h3> */}
            {/* <h3 className='experienceTitle'>{sectionTitles[3]}</h3> */}
            <h3 className='experienceTitle'>{props.sectionTitles[3]}</h3>
            {
                props.education.map((e, index) => {
                // education && education.map((e, index) => {
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
