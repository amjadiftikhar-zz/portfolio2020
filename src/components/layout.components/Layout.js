import React from 'react';
import Container from "react-bootstrap/Container";

export default function Layout(props) {
    return (
       <Container className="p-0" fluid={true}>
           {props.children}
       </Container>
    )
}
