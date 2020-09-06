import React from 'react';
import {Card} from "react-bootstrap";
import {FaGithub, FaExternalLinkSquareAlt} from "react-icons/fa"
import {MdDescription} from "react-icons/md";
import ReactTooltip from 'react-tooltip';

function Project(props) {
return (
  <Card className="bg-light" style={{ width: '18rem', marginBottom:"7%", 
    borderBottom:"5px solid gray" }}>
      {/* main div of the project designed */}
    <div className="projectContents">
      <h5>{props.projectTitle}</h5>
      {/* main div to implement flipping on hover over*/}
      <div className="flipBox">
        <div className="flipBox-inner">
          <div className="flipBox-front">
            <img className="projectImage" src={props.projectImage} alt=""/>
          </div>
          <div className="flipBox-back">
            <h5 style={{fontWeight: "bolder", borderBottom:"1px solid white"}}>Tech Stack</h5>
            <div className="techStackClass">                
              {props.stackList} 
            </div>           
          </div>
        </div>
      </div>
      {/* icons' section of the project starts from here*/}
      <div className="iconSection">
        <span className="classSpan">
          <a className="toolTip" href={props.githubLink}>
            <FaGithub className="classIcon toolTip" />
            <span className="classTooltip">Github</span>
          </a> 
        </span>
        <span className="classSpan">
          <a className="toolTip" href={props.herokuLink}>
            <FaExternalLinkSquareAlt className="classIcon toolTip"/>
            <span className="classTooltip">Preview</span> 
          </a>
        </span>
        <span className="classSpan">
          {/* Div for the Tooltip designed for the project description  */}
          <div className="toolTip">  
            <MdDescription data-tip data-for='description' id="sadFace" 
              className="classIcon toolTip"/>
            <ReactTooltip id='description' className="classToolTipBubble" type='warning' 
              effect='solid'>
              <span className=" classToolTipBubble">
                {props.description}
              </span> 
            </ReactTooltip>
          </div>
        </span>
      </div>
    </div>
  </Card>
  )
}

export default Project;





// import React from 'react';
// import {Container} from "react-bootstrap";
// import mealsharingImage from "../../images/mealsharing.jpg";
// import githubIcon from "../../images/github.png";
// import weatherAppImage from "../../images/weatherApp.jpg";
// import githubSearch from "../../images/githubSearch.jpg";
// import giphySearch from "../../images/giphySearch.jpg";
// import seasonyApp from "../../images/seasonyApp.jpg";
// import projectsIcon from "../../images/projectsIcon.png";
// import externalLinkIcon from "../../images/externalLinkIcon.png";
// import descriptionIcon from "../../images/descriptionIcon.png";
// import Style from "./projects.style";

// export default function Projects() {

//   return (
//     <Style>
//     <Container>
//       <h2><img className="projectIcon" src={projectsIcon} alt=""/>PROJECTS</h2>
//       <div className="project-section">        
//         <div className="project-content">
//           <h5>Seasony Desktop Application</h5>
//           <div className="flipBox">
//             <div className="flipBox-inner">
//               <div className="flipBox-front">
//                 <img className="projectImage" src={seasonyApp} alt=""/>
//               </div>
//               <div className="flipBox-back">
//                 <h5>Tech stack</h5>
//                 <ul>
//                   <li>Javascript</li>
//                   <li>Node JS</li>
//                   <li>React</li>
//                   <li>HTML</li>
//                   <li>CSS</li>
//                   <li>Storybook</li>
//                   <li>Express</li>
//                   <li>Knex</li>
//                   <li>Heroku</li>
//                   <li>Github</li>
//                   <li>Git</li>
//                   <li>MySQL</li>
//                   <li>Swagger</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="iconSection">
//             <span className="classSpan">
//               <a className="toolTip" href="https://github.com/HackYourFuture-CPH/FP-class11">
//                 <img className="classIcon toolTip" src={githubIcon} alt=""/>
//                 <span className="classTooltip">Github</span>
//               </a> 
//             </span>
//             <span className="classSpan">
//               <a className="toolTip" href="https://fp-class11.herokuapp.com/">
//                 <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
//                 <span className="classTooltip">Click to preview</span> 
//               </a>
//             </span>
//             <span className="classSpan">
//               <a className="toolTip" href="https://fp-class11.herokuapp.com/">
//                 <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
//                 <span className="classTooltip">Project Description</span> 
//               </a>
//             </span>
//           </div>
//           </div>
//           <div className="project-content">
//           <h5>Meal Sharing Application</h5>
//           <div className="flipBox">
//             <div className="flipBox-inner">
//               <div className="flipBox-front">
//                 <img className="projectImage" src={mealsharingImage} alt=""/>
//               </div>
//               <div className="flipBox-back">
//                 <h5>Tech stack</h5>
//                 <ul>
//                   <li>Javascript</li>
//                   <li>Node JS</li>
//                   <li>HTML</li>
//                   <li>CSS</li>
//                   <li>Express</li>
//                   <li>Heroku</li>
//                   <li>Github</li>
//                   <li>Git</li>
//                   <li>MySQL</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="iconSection">
//             <span className="classSpan">
//                <a className="toolTip" href="https://github.com/amjadiftikhar/myProjects">
//                  <img className="classIcon toolTip" src={githubIcon} alt=""/>
//                  <span className="classTooltip">Github</span>
//                </a>
//             </span>
//             <span className="classSpan">
//                 <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
//                   <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
//                   <span className="classTooltip">Click to preview</span>
//                 </a>
//             </span>
//             <span className="classSpan">
//                 <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
//                   <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
//                   <span className="classTooltip">Project Description</span>
//                 </a>
//             </span>
//           </div> 
//           </div>
//           <div className="project-content">
//           <h5>Weather Application</h5>
//           <div className="flipBox">
//             <div className="flipBox-inner">
//               <div className="flipBox-front">
//                 <img className="projectImage" src={weatherAppImage} alt=""/>
//               </div>
//               <div className="flipBox-back">
//                 <h5>Tech stack</h5>
//                 <ul>
//                   <li>Javascript</li>
//                   <li>HTML</li>
//                   <li>CSS</li>
//                   <li>Github</li>
//                   <li>Git</li>
//                   <li>REST API</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="iconSection">
//             <span className="classSpan">
//               <a className="toolTip" href="https://github.com/amjadiftikhar/myProjects">
//                 <img className="classIcon toolTip" src={githubIcon} alt=""/>
//                 <span className="classTooltip">Github</span>
//               </a>
//             </span>
//             <span className="classSpan">
//                 <a className="toolTip" href="https://htmlpreview.github.io/?https://github.com/amjadiftikhar/my_SPAs/blob/master/weather-App/index.html">
//                   <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
//                   <span className="classTooltip">Click to preview</span>
//                 </a>
//             </span>
//             <span className="classSpan">
//                 <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
//                   <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
//                   <span className="classTooltip">Project Description</span>
//                 </a>
//             </span>
//           </div> 
//           </div>
//           <div className="project-content">
//           <h5>Search Github Users</h5>
//           <div className="flipBox">
//             <div className="flipBox-inner">
//               <div className="flipBox-front">
//                 <img className="projectImage" src={githubSearch} alt=""/>
//               </div>
//               <div className="flipBox-back">
//                 <h5>Tech stack</h5>
//                 <ul>
//                   <li>Javascript</li>
//                   <li>React</li>
//                   <li>HTML</li>
//                   <li>CSS</li>
//                   <li>Github</li>
//                   <li>Git</li>
//                   <li>REST API</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="iconSection">
//             <span className="classSpan">
//               <a className="toolTip" href="https://github.com/amjadiftikhar/searchUsers_github">
//                 <img className="classIcon toolTip" src={githubIcon} alt=""/>
//                 <span className="classTooltip">Github</span>
//               </a>
//             </span>
//             <span className="classSpan">
//               <a className="toolTip" href="https://github.com/amjadiftikhar/searchUsers_github">
//                 <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
//                 <span className="classTooltip">Click to preview</span>
//               </a>
//             </span>
//             <span className="classSpan">
//               <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
//                 <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
//                 <span className="classTooltip">Project Description</span>
//               </a>
//             </span>
//           </div> 
//           </div>
//           <div className="project-content">
//           <h5>Giphy Search</h5>
//           <div className="flipBox">
//             <div className="flipBox-inner">
//               <div className="flipBox-front">
//                 <img className="projectImage" src={giphySearch} alt=""/>
//               </div>
//               <div className="flipBox-back">
//                 <h5>Tech stack</h5>
//                 <ul>
//                   <li>Javascript</li>
//                   <li>HTML</li>
//                   <li>CSS</li>
//                   <li>Github</li>
//                   <li>Git</li>
//                   <li>REST API</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="iconSection">
//             <span className="classSpan">
//               <a className="toolTip" href="https://github.com/amjadiftikhar/my_SPAs/tree/master/giphy-App">
//                 <img className="classIcon toolTip" src={githubIcon} alt=""/>
//                 <span className="classTooltip">Github</span>
//               </a>
//             </span>
//             <span className="classSpan">
//               <a className="toolTip" href="https://htmlpreview.github.io/?https://github.com/amjadiftikhar/my_SPAs/blob/master/giphy-App/index.html">
//                 <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
//                 <span className="classTooltip">Click to preview</span>
//               </a>
//             </span>
//             <span className="classSpan">
//               <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
//                 <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
//                 <span className="classTooltip">Project Description</span>
//               </a>
//             </span>
//           </div> 
//         </div>
//       </div>      
//     </Container>
//     </Style>    
//   );
// }
