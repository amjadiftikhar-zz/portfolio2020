import React from 'react';
import {Container} from "react-bootstrap";
import "./about.style.js";
import Style from "./about.style";
import aboutMeImage from "../../images/aboutMeImage.jpg";
import Skills from "../../components/skills.components/Skills";
import {BsFillInfoSquareFill} from "react-icons/bs"

export default function About() {
  return (
    <Style>
    <Container style={{marginTop: "15em"}}>
      <h3><BsFillInfoSquareFill className="aboutMeIcon"/>
        About me
      </h3>
      <div className="aboutMeSection">
        <div className="imageSection">
          <img src={aboutMeImage} alt="" width="100%" />
        </div>    
        <div className="contentClass">
          <p style = {{color:"orange"}}>Who I am?</p>
          <h4>I'm Amjad, a Full Stack Web Developer</h4>
          <p>
            <br/>I am a Software Developer based in Denmark. 
            I have developed an academic and some hobby projects recently. 
            I have worked with several tech stacks and particularly excels in JavaScript, 
            React, Node JS, HTML, CSS and MySql.<br/> 
            <br/>I have been contributing to open source projects to learn new development  techniques and deepen my knowledge in Full-stack domain. I am looking to discover 
            new ﬁelds in the domain of tech and development. <br/><br/>
            Just take a look at my portfolio work and lets see if we can work 
            together on your next project. 
          </p> 
          <div className="contactClass">
            <div className="contactDetails">              
              <p>Name:<span style={{marginLeft:"5px"}}>Amjad Iftikhar</span></p>
              <p>Email: <span style={{color:"orange", marginLeft:"5px"}}>amjadiftikhar_99@hotmail.com</span> </p>
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

{/* <div id="accordion">
  <div class="card">
  <div class="card-header" id="headingThree">
    <h5 class="mb-0">
      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        My 
      </button>
    </h5>
  </div>
  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
    <div class="card-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </div>
  </div>
</div>
</div> */}