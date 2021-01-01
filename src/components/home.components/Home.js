import React from 'react';
import {Container} from "react-bootstrap";
import LandingPageComponent from "../landingPage.components/LandingPage";
import About from "../about.components/About";
import Education from "../education.components/Education";
import Experience from "../experience.components/Experience";
import Projects from "../project.components/Projects";
import Accordion from "../accordion.components/Accordion";
import MyKeySkills from '../skills.components/MyKeySkills';
import ScrollToTop from "../scroll.components/ScrollToTop";
import ScrollToDown from "../scroll.components/ScrollToDown";
import "./home.styles.css";

export default function Home() {

  return (
    <Container className="container-fluid">
      <LandingPageComponent/>
      <About/>
      <ScrollToDown/>
      <ScrollToTop/>
      <Accordion title="Further Details">
        <MyKeySkills/>     
      </Accordion> 
      <Accordion title="Projects">
        <Projects/>     
      </Accordion> 
      <Accordion title="Education">
        <Education/>      
      </Accordion> 
      <Accordion title="Experience">
        <Experience/>      
      </Accordion> 
      <div className="navigationBtn">
        <a className="previousBtn" href="/">Top</a>
        <a className="previousBtn" href="/contact">Next</a>
      </div>
    </Container> 
  );
}
