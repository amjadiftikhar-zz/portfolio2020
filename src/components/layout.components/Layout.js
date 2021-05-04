import React from 'react';
import Container from "react-bootstrap/Container";

const Layout = (props) => {
    
    return (
       <Container fluid={true} style={{marginTop:"10rem"}} data-testid='layout'>
           {props.children}
       </Container>
    )
}

export default Layout;
