import React from 'react';
import './language.styles.css';
import LanguageCard from './LanguageCard';

// import languageData from '../../../../assets/resume_eng.json';
// import languageData from '../../../../assets/resume_dk.json';



// const lan
//guage: 'Danish',
//         level: 'Professional Working Proficiency
//     }, 
//     {
//         language: 'Urdu',
//        vel: 'Native or Bilingu'
//     }        
// ]

const Languages = (props) => {

    return (
        <div className='languageSection'>
            <h3 className='languageTitle'>{props.sectionTitles[6]}</h3>
            <div className='languageCotainer'>
                {
                    props.languages.map((l, index) => {
                        return(
                            <LanguageCard
                                key={index}
                                languageName={l.language}
                                languageLevel={l.level}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Languages;
