import React from 'react';
import {Card } from 'reactstrap';
import Style from "./skills.style";

const skillsArr = ["Javascript", "Typescript", "React","Storybook", "HTML5", 
    "CSS3", "Node JS", "Bootstrap","Material UI","D3.js", "Express", "NPM", "Webpack",
    "MySql", "Github", "Postman", "Heroku"]

function MyKeySkills() {
    return (
        <Style>
            <div className="skillsList">
                {skillsArr.map(skill => 
                <Card border="info" style={{margin:"1.5rem"}} 
                    className="col-md- col-sm-2 offset-md-1"> 
                    <span key={skill} className="sectionElement">
                        {skill}
                    </span>
                </Card>  
                )}
            </div> 
        </Style>
    )
}

export default MyKeySkills;
