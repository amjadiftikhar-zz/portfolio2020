import React from 'react';
import './cvProjects.styles.css';

const CVProjectCard = () => {

    return (
        <div className="cvProjectCard"> 
            <span className="cvProjectName">Movie Catalogue (10/2020 - 10/2020)</span>
            <ul className="cvProjectDescription">
                <li>
                    Application built in React using Star Wars API to show movies and
                    movie characters as well as character specs. Tool used are, Javascript, 
                    React, HTML, CSS and API, Git, Github. 
                </li>
            </ul>            
        </div>
    )
}

export default CVProjectCard;