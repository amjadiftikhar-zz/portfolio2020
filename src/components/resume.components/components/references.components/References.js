import React from 'react';
import LanguageCard from '../language.components/LanguageCard';

// import referenceData from '../../../../assets/resume_dk.json';

import './references.styles.css';

// const referenceData = [
//     {
//ark@mqs.dk '
//          
// ]

const References = (props) => {

    return (
        <div className='referencesection'>
            <h3 className='referenceTitle'>{props.sectionTitles[7]}</h3>
            <div className='referenceCotainer'>
                {
                    props.references.map((r, index) => {
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
