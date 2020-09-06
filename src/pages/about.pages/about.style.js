import styled from "styled-components";

const Style = styled.div`
  .aboutMeIcon {
    width: 0.9em;
    height: 0.9em;
    margin-right: 0.3em;
  }
  {    
    margin-bottom: 10%;
  }
  h3 {
    margin-top: 5em;
    padding: 0.2em;
  }
  .aboutMeSection {
    margin-top: 5%;
    display: flex; 
  }
  .contentClass {
    margin-left: 2em;
  }
  .contactClass {
    display: flex;
    flex-direction: column;
    line-height: 3.5vw;
    border-top: 1px solid #C1BDB5;
  }
  .contactDetails {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  p {
    font-family: sans-serif;
    color: black;
    font-size: 14px;
    margin-top: 3%;
  }
  .downloadClass{
    padding:0.8vw;
    background-color: orange;
    border-radius: 5em; 
  }
  .myWorkClass {
    padding:0.8vw;
    border-radius: 5em;
    background-color: #C1BDB5; 
    margin-left: 1.2vw;
    text-decoration: none;
    color: black;
  }
`;

export default Style; 