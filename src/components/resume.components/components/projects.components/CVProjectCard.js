import React from 'react';
import './cvProjects.styles.css';

const CVProjectCard = (props) => {

    return (
        <div className="cvProjectCard"> 
            <span className="cvProjectName">
                {/* Movie Catalogue (10/2020 - 10/2020) */}
                {props.contentDuration}
            </span>
            <ul className="cvProjectDescription">
                <li>
                    {/* Application built in React using Star Wars API to show movies and
                    movie characters as well as character specs. Tool used are, Javascript, 
                    React, HTML, CSS and API, Git, Github.  */}
                    {props.contentDescription}
                </li>
            </ul>            
        </div>
    )
}

export default CVProjectCard;