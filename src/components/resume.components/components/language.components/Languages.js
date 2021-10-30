import React from 'react';
import './language.styles.css';
import LanguageCard from './LanguageCard';

import languageData from '../../../../assets/resume_eng.json';
// import languageData from '../../../../assets/resume_dk.json';



// const languageD    
//     },
//     {
//         language: 'Danish',
//         level: 'Professional Working Proficiency
//     }, 
//     {
//         language: 'Urdu',
//         level: 'Native or Bilingual Pro'
//     }        
// ]

const Languages = () => {

    return (
        <div className='languageSection'>
            <h3 className='languageTitle'>{languageData.sectionTitles[6]}</h3>
            <div className='languageCotainer'>
                {
                    languageData.languages.map((l, index) => {
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
