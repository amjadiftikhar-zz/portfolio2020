import React from 'react';
import CertificateCard from './CertificateCard';
import './certificates.styles.css';

import certificatesData from '../../../../assets/resume_eng.json';


// const certificateData = [
//     {
//         duration: 'Microsoft Certified Professional, MCP ID: 8074395',
//         description: 'MCSE, MCSA, MCP and MCTS (windows 2007)'
//     },
//     {
//         duration: 'Cisco Academic Certifications (2008)',
//         description: 'CCNP (Cisco Certified Network Professional) & CCNA (Cisco Certified Network Associate)'
//     }        
// ]

const Certificates = () => {

    return (
        <div className='certificateSection'>
            <h3 className='cvCertificateTitle'>Certificates</h3>
            <div className='certificateContainer'>
                {certificatesData.certificates.map((c, index) => {
                    return(
                        <CertificateCard                  
                            key={index}
                            contentDuration={c.duration}
                            contentDescription={c.description}
                        />
                    )
                })} 
            </div>           
        </div>
    )
}

export default Certificates;
