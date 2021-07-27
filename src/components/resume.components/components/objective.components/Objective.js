import React from 'react';
// import Title1 from './titles.components/Title1';
import './objective.styles.css';
import ObjectiveCard from './ObjectiveCard';
import objectiveData from '../../../../assets/resume_eng.json';

// const objectiveData = [
//     {
//         name: 'Amjad Iftikhar',
//         jobTitle: 'Frontend Developer',
//         objective: 'Curious and talented developer with a flair for creating elegant solutions in the least amount of time and have passion for responsive website design as well as a firm believer in the mobile-first approach. Have contributed in different projects to learn new development techniques and very passionate about new fields in the domain of tech and.'
//     }
// ]


const Objective = () => {

    return (
        <div className="objectiveSection">
            {/* <Title1 title='Amjad Iftikhar' /> */}
            {objectiveData.objective.map((o, index) => {
                return(
                    <ObjectiveCard
                        key={index}
                        myName={o.name}
                        jobTitle={o.jobTitle}
                        objective={o.objective}
                    />
                )
            })}
            {/* <h1 className="cvTitle">Amjad Iftikhar</h1>
            <h3 className="cvJobTitle">Frontend Developer</h3>
            <p className='objectiveText'>
                Curious and talented developer with a flair for creating elegant 
                solutions in the least amount of time and have passion for responsive 
                website design as well as a firm believer in the mobile-first approach. 
                Have contributed in different projects to learn new development techniques 
                and very passionate about new fields in the domain of tech and development.
            </p> */}
        </div>
    )
}

export default Objective;