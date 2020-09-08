import React from 'react';
import {Card} from "react-bootstrap";

function PrimarySkills(props) {
    return (        
        <Card className="bg-light" style={{ width: '18rem', marginBottom:"5%", 
            borderBottom:"5px solid gray" }}>
          <Card.Img variant="top" style={{width:"8rem", height:"8rem", margin:"auto"}} 
            src={props.imageSrc} />
          <Card.Body>
            <Card.Title style={{textAlign:"center", fontWeight:"bold"}}>
              {props.title}
            </Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
          </Card.Body>
        </Card> 
    )
}

export default PrimarySkills
