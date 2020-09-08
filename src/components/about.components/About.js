import React from 'react';
import {Container} from "react-bootstrap";
import aboutMeImage from "../../images/aboutMeImage.jpg";
import Skills from "../../components/skills.components/Skills";
import {BsFillInfoSquareFill} from "react-icons/bs";
import Style from "./about.style";

export default function About() {
  return (
    <Style>
    <Container style={{marginTop:"10rem"}}>
      <h3><BsFillInfoSquareFill className="aboutMeIcon"/>About me</h3>
      <div className="aboutMeSection">
        <div className="imageSection">
          <img src={aboutMeImage} alt="" width="100%" />
        </div>    
        <div className="contentClass">
          <p className="pClass" style = {{color:"orange"}}>Who I am?</p>
          <h4>I'm Amjad, a Full Stack Web Developer</h4>
          <p className="pClass">
            <br/>I am a Software Developer based in Denmark. 
            I have developed an academic and some hobby projects recently. 
            I have worked with several tech stacks and particularly excels in JavaScript, 
            React, Node JS, HTML, CSS and MySql.<br/> 
            <br/>I have been contributing to open source projects to learn new 
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
            <div>
              <a className="downloadClass">Download resume</a>
              <a href="/projects" className="myWorkClass" >My Work</a>
            </div>
          </div>   
        </div>
      </div>
      <Skills/>
    </Container>
    </Style>
  );
}
