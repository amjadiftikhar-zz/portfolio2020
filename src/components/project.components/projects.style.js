import styled from "styled-components";

const Style = styled.div`
  .projectSection {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 5%;
  }
  h3 {
    margin-top: 5em;
    padding: 0.2em;
  }
  h5 {
    width: 100%;
    text-align: center;
    margin-bottom: 1em;
    font-family: sans-serif;
    padding: 0.5em;
    font-size: 1rem;
    letter-spacing: 0.05rem;   
  }
  .projectImage {
    width:20em;
    height: 20em;    
    animation: mymove 5s infinite;
  } 
  @keyframes mymove {
    50% {border-bottom-right-radius: 150px;}
  }
  .projectContents {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
  }
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
    transition: transform 0.8s;
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
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  }
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