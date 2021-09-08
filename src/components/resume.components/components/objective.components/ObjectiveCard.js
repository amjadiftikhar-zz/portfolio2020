import React from 'react';

const ObjectiveCard = (props) => {

    return (
        <div className="objectiveCard">
            <h1> {props.myName} </h1>
            <h3> {props.jobTitle} </h3>
            <p>
               {props.objective}
            </p>
        </div>
    );
}

export default ObjectiveCard;











import React from 'react';
import './objective.styles.css';

import { useTranslation } from 'react-i18next';

const ObjectiveCard = (props) => {

    const {t, i18n} = useTranslation();

    return (
        <div className="objectiveCard">
            <h1 className="cvTitle"> {props.myName} </h1>
            <h3 className="cvJobTitle"> {props.jobTitle} </h3>
            <p className='objectiveText'>
               {props.objective}
            </p>
        </div>
    );
}

export default ObjectiveCard;
