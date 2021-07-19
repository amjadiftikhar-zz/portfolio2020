import React from 'react';
import LanguageCard from '../language.components/LanguageCard';

import './references.styles.css';

const referenceData = [
    {
        reference: 'Mark Nicholas Jones (CEO MQS )',
        email: 'mark@mqs.dk '
    },
    {
        reference: 'Rahim Ismaili (Developer at Dwarf)',
        email: 'ismailirahim6@gmail.com'
    },       
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
                                languageName={r.reference}
                                languageLevel={r.email}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default References;
