import React from 'react';
// import Title1 from './titles.components/Title1';
import './objective.styles.css';
import ObjectiveCard from './ObjectiveCard';
import objectiveData from '../../../../assets/resume_eng.json';
// import objectiveData from '../../../../assets/resume_dk.json';


import { useTranslation } from 'react-i18next';


const Objective = () => {


    const {t, i18n} = useTranslation();

    return (
        <div className="objectiveSection">
            {/* <h2>{t('danish.hello')}</h2> */}
            { objectiveData.objective.map((o, index) => {
                return(
                    <ObjectiveCard
                        key={index}
                        myName={o.name}
                        jobTitle={o.jobTitle}
                        objective={t(`${o.objective}`)}
                    />
                )
            })}
            {/* <h1 className="cvTitle">Amjad Iftikhar</h1>
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
