import React from 'react';
import {Container} from "react-bootstrap";
import LandingPageComponent from "../../components/landingPage.components/LandingPage";
import About from "../../pages/about.pages/About";
import Education from "../../pages/education.pages/Education";
import Experience from "../../pages/experience.pages/Experience";
import Projects from "../../pages/projects.pages/Projects";
import Accordion from "../../components/accordion.components/Accordion";
// import Button from "../../components/button.component/Button";
// import { useHistory } from 'react-router-dom';

export default function Home() {
  // const history = useHistory();
  // const onclickHandle = () => {
  // let path = `/`;
  // history.push(path);
  // }

  return (
    <Container className="container-fluid">
      <LandingPageComponent/>
      <About/>
      <Projects/>
      <Accordion title="Education">
        <Education/>      
      </Accordion> 
      <Accordion title="Experience">
        <Experience/>      
      </Accordion> 
    </Container> 
  );
}
