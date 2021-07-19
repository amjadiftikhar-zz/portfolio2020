import React from 'react';
import './language.styles.css';
import LanguageCard from './LanguageCard';

const referenceData = [
    {
        language: 'English',
        level: 'Full Professional Proficiency'
    },
    {
        language: 'Danish',
        level: 'Professional Working Proficiency'
    }, 
    {
        language: 'Urdu',
        level: 'Native or Bilingual Proficiency'
    }        
]

const References = () => {

    return (
        <div className='referencesection'>
            <h3 className='referenceTitle'>References</h3>
            <div className='referenceCotainer'>
                {
                    referenceData.map((r, index) => {
                        return(
                            <LanguageCard
                                key={index}
                                referenceName={r.language}
                                referenceTitle={r.level}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default References;
