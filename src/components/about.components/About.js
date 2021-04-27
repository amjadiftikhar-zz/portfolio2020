import React from 'react';
import {Container} from "react-bootstrap";
import aboutMeImage from "../../images/aboutMeImage.jpg";
import Skills from "../../components/skills.components/Skills";
import {BsFillInfoSquareFill} from "react-icons/bs";
import PrintEducation from '../print.components/PrintEducation';
import Education from '../education.components/Education';
import Experience from "../experience.components/Experience";
import "./about.style.css";

const About = () => {
  return (
    <Container style={{marginTop:"3rem"}} data-testid='about'>
      <h3><BsFillInfoSquareFill className="aboutMeIcon"/>About me</h3>
      <div className="aboutMeSection">
        <div className="imageSection">
          <img src={aboutMeImage} alt="" width="100%" />
        </div>    
        <div className="contentClass">
          <p className="pClass">Who I am?</p>
          <h4 style = {{color:"orange"}}>I'm Amjad, a Full Stack Web Developer</h4>
          <p className="pClass">
            <br/>I am a Software Developer based in Denmark. 
            I have developed an academic and some hobby projects recently. 
            I have worked with several tech stacks and particularly excel in JavaScript, Typescript,
            React, Node JS, HTML, CSS and MySql.<br/> 
            <br/>I have been developing small projects to learn new 
            development  techniques and deepen my knowledge in Full-stack domain. 
            I am looking to discover 
            new ﬁelds in the domain of tech and development. <br/><br/>
            Just take a look at my portfolio work and lets see if we can work  
            together on your next project. 
          </p> 
          <div className="contactClass">
            <div className="contactDetails">              
              <p className="pClass">Name:<span style={{marginLeft:"5px"}}>
                Amjad Iftikhar</span>
                </p>
              <p className="pClass">Email: <span style={{color:"orange", marginLeft:"5px"}}>
                amjadiftikhar_99@hotmail.com</span> 
              </p>
            </div>
            <div className="aboutSectionBtn">
              <PrintEducation>
                <Experience/>
                <Education/>
              </PrintEducation>
              <div>                
                <a href="/projects" className="myWorkClass" >My Work</a>
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
