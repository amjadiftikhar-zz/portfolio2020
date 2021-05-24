import styled from "styled-components";

const Style = styled.div`
  .mySkills {
    width: 0.9em;
    height: 0.9em;
    margin-right: 0.2em;
  }
  .skillCard {
    width: 18em; 
    marginBottom: 5%;
  }
  h3 {    
    margin-bottom: 1.5rem;
  }
  .skillsContentSection {
    padding: 1em;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;           
  }
  .skillCard {
    background-color: #f3f3f3;
    border: none;
  }
  .skillCard:hover {
    box-shadow: 0px 0px 6px 0 #c6c6c6;
  }
  .skillsList {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #f3f3f3;
    margin-top: 3rem;
    padding: 2rem;
    transition: 2s ease-out;
  }
  .sectionElement {  
    padding: 1em;
    font-weight: bold;
    text-align: center;
  }
  @media only screen and (max-width: 1440px) {
    .skillsContentSection {
      border: 2px solid red;
      // padding: 2em;
      // display:flex;
      // flex-wrap: wrap;
      // justify-content: space-between; 
      // align-items: center;          
    }
    .skillCard {
      width: 22em;
      margin-top: 3em;
      margin-bottom: 5em;
    }
    .sectionElement { 
      // font-size: 0.9rem;
    }
  } 
  @media only screen and (max-width: 1280px) {
    .skillsContentSection {
      border: 2px solid red;
      // padding: 2em;
      // display:flex;
      // flex-wrap: wrap;
      // justify-content: space-between; 
      // align-items: center;          
    }
    .skillCard {
      width: 22em;
      margin-top: 3em;
      margin-bottom: 5em;
    }
    .sectionElement { 
      // font-size: 0.9rem;
    }
  } 
  @media only screen and (max-width: 1024px) {
    .skillsContentSection {
      // padding: 1em;
      // display:flex;
      // flex-wrap: wrap;
      // justify-content: space-between; 
      // align-items: center;          
    }
    .skillCard {
      margin-top: 3em;
      margin-bottom: 5em;
    }
    .sectionElement { 
      // font-size: 0.9rem;
    }
  } 
  @media only screen and (max-width: 768px) {
    .skillsContentSection {
      // padding: 1em;
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between; 
      align-items: center;          
    }
    .skillCard {
      margin-bottom: 5em;
    }
    .sectionElement { 
      font-size: 0.9rem;
    }
  } 
  @media only screen and (max-width: 750px) {
    .skillsContentSection {
      // border: 2px solid red;
      // padding: 1em;
      display:flex;
      flex-wrap: wrap;
      justify-content: center; 
      align-items: center;  
    }
    .sectionElement { 
      font-size:0.5rem;
    }
  } 
  @media only screen and (max-width: 540px) {
    .sectionElement { 
      font-size: 1rem;
    }
  } 
  @media only screen and (max-width: 414px) {
    .sectionElement { 
      font-size: 1rem;
    }
    .skillsList {
      height: 100%;
    }
  }
  @media only screen and (max-width: 376px) {
    .skillCard {
      margin-bottom: 5em;
    }
    .sectionElement { 
      font-size:0.9rem;
    }
    .skillsList {
      height: 100%;
    }
  }  
  @media only screen and (max-width: 360px) {
    .skillsList {
      height: 100%;
    }
  } 
  @media only screen and (max-width: 320px) {
    .skillCard {
      // width: 25em !important;
      margin-bottom: 5em;
    }
    .sectionElement { 
      font-size:0.8rem;
    }
    .skillsList {
      height: 100%;
    }
  }  
  @media only screen and (max-width: 280px) {
    .skillCard {
      margin-bottom: 3em;
    }
    .sectionElement { 
      font-size:0.5rem;
    }
    .skillsList {
      height: 100%;
    }
  }  
`;

export default Style;