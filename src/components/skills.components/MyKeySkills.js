import React from 'react';
import {Card } from 'reactstrap';
import skillData from "../../assets/data.json";
import Style from "./skills.style";

function MyKeySkills() {
    return (
        <Style>
            <div className="skillsList">
                {skillData.skills.map((skill, index) => 
                <Card key={index} border="info" style={{margin:"1.5rem"}} 
                    className="col-md- col-sm-3 offset-md-1"> 
                    <span  className="sectionElement">
                        {skill}
                    </span>
                </Card>  
                )}
            </div> 
        </Style>
    )
}

export default MyKeySkills;
