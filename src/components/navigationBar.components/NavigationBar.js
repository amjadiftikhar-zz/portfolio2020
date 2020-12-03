import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import homeIcon from "../../images/homeIcon.png";
import NavigationBarStyles from "./navigationBar.style.js";
import {AiOutlineHome} from "react-icons/ai";

export default function NavigationBar() {
  return (
    <NavigationBarStyles>
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href="/">
          <AiOutlineHome className="classHomeIcon" src={homeIcon} 
            alt="home page image" />
        </Navbar.Brand>
        <Navbar.Toggle className="toggle bg-light" 
          aria-controls="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavigationBarStyles>
  );
}
