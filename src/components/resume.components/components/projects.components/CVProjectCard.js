import React from 'react';
import './cvProjects.styles.css';

const CVProjectCard = (props) => {

    return (
        <div className='cvProjectCard'> 
            <span className='cvProjectName'>
                {props.contentDuration}
            </span>
            <ul className="cvProjectDescription">
                <li>
                    {props.contentDescription}
                </li>
            </ul>            
        </div>
    )
}

export default CVProjectCard;