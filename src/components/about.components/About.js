import React from 'react';
import {Container} from "react-bootstrap";
// import aboutMeImage from "../../images/aboutMeImage.jpg";
import aboutMeImage from "../../images/aboutMeImage.png";
import Skills from "../../components/skills.components/Skills";
import {BsFillInfoSquareFill} from "react-icons/bs";
import PrintEducation from '../print.components/PrintEducation';
// import Education from '../education.components/Education';
// import Experience from "../experience.components/Experience";

import "./about.style.css";
import Resume from '../resume.components/Resume';

const About = () => {

  return (
    <Container style={{marginTop:"3rem"}} data-testid='about'>
      <h3><BsFillInfoSquareFill className="aboutMeIcon"/>
        About me
      </h3>
      <div className="aboutMeSection">
        <div className="imageSection">
          <img src={aboutMeImage} alt="" width="100%" height="100%" />
        </div>    
        <div className="contentClass">
          <p className="pClass">Who I am?</p>
          <h4 style = {{color:"orange"}}>I'm Amjad, a Full Stack Web Developer</h4>
          <p className="pClass">
            <br/>I am a Software Developer based in Denmark. I've vast array of knowledge in many 
            different frontend and backend lanuages, responsive frameworks, databases and 
            best code practices. My objective is simply to be the best web developer that I can be 
            and to contribute in the technology industry all that I am skilled in.<br/> <br/>
            I'm dedicated to perfecting my craft by learning from most seasoned developers, 
            remaining humble, and continuously making strides to learn new things about development.
            I have worked with several tech stacks and particularly excel in JavaScript, Typescript, 
            React, Node JS, HTML, CSS and MySql.<br/> <br/>
            Just take a look at my portfolio work and lets see if we can work together on your next 
            project. 
          </p> 
          <div className="contactClass">
            <div className="contactDetails">              
              <p className="pClass emailSmall">
                Name:<span className="personalEmail">
                Amjad Iftikhar</span>
              </p>
              <p className="pClass emailSmall">Email: <a className="personalEmail" 
                href="mailto:amjadiftikhar_99@hotmail.com">
                amjadiftikhar_99@hotmail.com</a> 
              </p>
            </div>
            <div className="aboutSectionBtn">
              <PrintEducation>
                <Resume/>
              </PrintEducation>
              <div>                
                <a href="/projects" className="myWorkClass" >My work</a>
              </div>
            </div>
          </div>   
        </div>
      </div>
      <Skills/>
    </Container>
  );
}

export default About;
