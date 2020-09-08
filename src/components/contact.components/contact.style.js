import styled from "styled-components";

const Style = styled.div`
  h3 {
    margin-bottom: 1.5rem;
  }
  .contactElements {
    color: white;
    font-size: 0.6rem;
  }
  .contactContainer{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border-bottom: 5px solid gray;
    height: 80%;    
    background-color: #C1BDB5;
    color: white;
    padding: 2rem;
  }
  .socialMediaSection {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    color: white;
    width: 16.7rem;
    height: 45%;
    transform: skew(20deg);
    background: orange;
  }
  .classIcon {
    width: 2em;
    height: 2em;
    color: black;
  }
  .socialMediaIconClass {
    margin-top: 50%;  
  }
  .contactFormSection {
    height: 80%;
  }
  .toolTip {
    margin-right: 1rem;
  }
  .classTooltip {
    display: none;
  }
  .toolTip:hover .classTooltip { 
    display: block;
    padding: 0.1rem;
    position: absolute;
    font-size: 12px;
    color: white;
  }
`;

export default Style; 