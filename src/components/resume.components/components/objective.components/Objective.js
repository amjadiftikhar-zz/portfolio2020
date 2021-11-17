import React, {useEffect, useState} from 'react';
// import Title1 from './titles.components/Title1';
import './objective.styles.css';
import ObjectiveCard from './ObjectiveCard';
// import objectiveData from '../../../../assets/resume_eng.json';
// import objectiveData from '../../../../assets/resume_dk.json';

import axios from 'axios';


import { useTranslation, Trans, withTranslation } from 'react-i18next';


const Objective = () => {

    const [objective, setObjective] = useState(null)

    useEffect(() => {
        // fetch('http://localhost:9000/objective')
        // .then(response => response.json())
        // .then(data =>  setObjective(data))
        axios.get('http://localhost:9000/objective')
            .then(response => setObjective(response.data))
    }, [])

    console.log('hello obj', objective)

    

    const {t, i18n} = useTranslation();

    return (
        <div className="objectiveSection">
            {/* <h2>{t('danish.hello')}</h2> */}
            {/* <Trans t={t}> */}
                {/* { objectiveData.objective.map((o, index) => { */}
                {objective && objective.map((o, index) => {
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
                      Have contributed in iferentnt techniques 
                and very passionate about new fields in the domain of tech and development.
            </p> */}
        </div>
    )
}

// export default withTranslation() (Objective);
export default Objective;

