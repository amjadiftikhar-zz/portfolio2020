import React from 'react';
import {Card} from "react-bootstrap";

function SkillsCard(props) {
    return (        
        <Card className="skillCard" 
          data-testid='skillsCard'>
          <Card.Img variant="top" className="skillsImage" style={{width:"8rem", height:"8rem", 
            margin:"auto"}} src={props.imageSrc} />
          <Card.Body>
            <Card.Title style={{textAlign:"center", fontWeight:"bold"}}>
              {props.title}
            </Card.Title>
            <Card.Text className="skillDescription">
              {props.description}
            </Card.Text>
          </Card.Body>
        </Card> 
    )
}

export default SkillsCard;
