import React from 'react';
import './language.styles.css';

const LanguageCard = (props) => {

    return (
        <div className='languageCard'>
            <p className='languageName'> {props.languageName} </p>
            <p className='languageLevel'> {props.languageLevel} </p>            
        </div>
    )
}

export default LanguageCard;
