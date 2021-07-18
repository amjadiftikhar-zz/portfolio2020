import React from 'react';
import CertificateCard from './CertificateCard';
import './certificates.styles.css';

const certificateData = [
    {
        duration: 'Microsoft Certified Professional, MCP ID: 8074395',
        description: 'MCSE, MCSA, MCP and MCTS (windows 2007)'
    }    
]

const Certificates = () => {

    return (
        <div className='certificateSection'>
            <h3 className='cvCertificateTitle'>Certificates</h3>
            <div className='certificateContainer'>
                {certificateData.map((c, index) => {
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
