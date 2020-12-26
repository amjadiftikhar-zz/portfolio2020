import React from 'react';
import {Nav, Navbar, NavLink} from "react-bootstrap";
import { withRouter } from "react-router";
import {LinkContainer} from 'react-router-bootstrap';
import homeIcon from "../../images/homeIcon.png";
import NavigationBarStyles from "./navigationBar.style.js";
import {AiOutlineHome} from "react-icons/ai";

const Header = (props) => {
  const {location} = props;
  return (
    <NavigationBarStyles>
      <Navbar fixed="top" expand="lg">
        <LinkContainer exact to="/">
          <Navbar.Brand >
            <AiOutlineHome 
              className="classHomeIcon" 
              style={{fontSize:"1.6rem"}} 
              src={homeIcon} alt="home page image" 
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle className="toggle bg-light" 
          aria-controls="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto" activeKey={location.pathname}>
            <LinkContainer exact to="/about">
              <NavLink >About</NavLink>
            </LinkContainer>
            <LinkContainer exact to="/projects">
              <NavLink >Projects</NavLink>
            </LinkContainer>
            <LinkContainer exact to="/education">
              <NavLink >Education</NavLink>
            </LinkContainer>
            <LinkContainer exact to="/experience">
              <NavLink >Experience</NavLink>
            </LinkContainer>
            <LinkContainer exact to="/contact">
              <NavLink >Contact</NavLink>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavigationBarStyles>
  );
}

const NavigationBar = withRouter(Header);

export default NavigationBar;
