import React from "react";
import {Container} from "react-bootstrap";
import Project from "../../components/project.components/Project";
import projectsObject from "./projectsObject.js";
import {GrProjects} from "react-icons/gr";
// import "./projects.style.css";

function Projects() { 
    return (
      <Container style={{marginTop:"10rem"}}>
        <h3><GrProjects className="projectIcon"/>Projects</h3>
        <div className="projectSection">      
          {projectsObject.map(proj => <Project 
            key={proj}
            projectTitle={proj.projectTitle}
            stackList={proj.stackList.map(techStack => 
              <div key={techStack} className="techElements">{techStack}</div>
            )} 
            projectImage={proj.projectImage}
            githubLink={proj.githubLink}
            herokuLink={proj.herokuLink}
            description={proj.description}
          />
          )}
        </div>
      </Container> 
    )
  }
  
  export default Projects;