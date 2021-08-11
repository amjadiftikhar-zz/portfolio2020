import React from 'react';
// import Title1 from './titles.components/Title1';
import './objective.styles.css';
import ObjectiveCard from './ObjectiveCard';
// import objectiveData from '../../../../assets/resume_eng.json';
import objectiveData from '../../../../assets/resume_dk.json';

import axios from 'axios';


// import { useTranslation, Trans, withTranslation } from 'react-i18next';


const Objective = () => {

    axios.get("http://localhost:3000/data")
        .then(response =>  {console.log('hello', response)})


    // const {t, i18n} = useTranslation('myNamespace');

    return (
        <div className="objectiveSection">
            {/* <h2>{t('danish.hello')}</h2> */}
            {/* <Trans t={t}> */}
                { objectiveData.objective.map((o, index) => {
                    return(
                        <ObjectiveCard
                            key={index}
                            myName={o.name}
                            jobTitle={o.jobTitle}
                            objective={o.objective}
                        />
                    )
                })}
            {/* </Trans> */}
            {/*
            <p className='objectiveText'>
                website design as well as a firm believer in the mobile-first approach. 
                Have contributed in diferent projects to learn new development techniques 
                and very passionate about new fields in the domain of tech and development.
            </p> */}
        </div>
    )
}

// export default withTranslation() (Objective);
export default Objective;

