import React from 'react';
import Container from "react-bootstrap/Container";

export default function Layout(props) {
    return (
       <Container fluid={true} style={{marginTop:"11rem"}}>
           {props.children}
       </Container>
    )
}
