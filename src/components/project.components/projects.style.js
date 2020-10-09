import styled from "styled-components";

const Style = styled.div`

// project section styling where all projects are displayed

  .projectSection {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 1.5rem;
  }

  // heading for each project 

  h5 {
    width: 100%;
    text-align: center;
    margin-bottom: 1em;
    font-family: sans-serif;
    padding: 0.5em;
    font-size: 1rem;
    letter-spacing: 0.05rem;   
  }

  //image used for each project

  .projectImage {
    width:20em;
    height: 20em;    
    animation: mymove 5s infinite;
  } 

  // styling of each item in the project card

  .projectContents {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
  }

  // styling of Icons used in project section and project card

  .iconSection {
    padding: 15%;
    display: flex; 
    justify-content: space-around;   
  }
  .classIcon {
    width: 2em;
    height: 2em;
    color: black;
  }  
  .projectIcon {
    width: 0.5em;
    height: 0.5em;
    margin-right: 0.3em;
  }

  // Styling of Tooltip used for icons 

  .classTooltip {
    display: none;
  }
  .toolTip:hover .classTooltip { 
    display: block;
    padding: 0.5em;
    position: absolute;
    font-size: 0.8rem;
    color: black;    
  }
  .classSpan {
    margin-right: 20%;
  }

  // Tooltip for project description, shows up on description Icon

  .classToolTipBubble {
    display: none;
    margin: 0.5rem;
    -webkit-border-radius: 2rem;
  }
  .classToolTipBubble span {
    width: 12rem;
    height: 12rem;
  }
  #description {
    border: 1px solid white;
  }
  .toolTip:hover .classToolTipBubble { 
    display: block;
    font-size: 0.8rem;
  }

  // styling of flip related effect of project image 

  .flipBox {
    width: 20em;
    height: 20em;
    border: 0.1px solid #C1BDB5;
    perspective: 1000px;
  }  
  .flipBox-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.9s;
    transform-style: preserve-3d;
  }  
  .flipBox:hover .flipBox-inner {
    transform: rotateY(180deg);
  }  
  .flipBox-front, .flipBox-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .flipBox-back {
    background-color: orange;
    color: white;
    transform: rotateY(180deg);
  }

  // styling on the backside of a project image

  .techStackClass {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .techElements {
    padding: 0.5em;
    text-align: center;
  }
  `;

  export default Style;