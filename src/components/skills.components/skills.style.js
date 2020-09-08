import styled from "styled-components";

const Style = styled.div`
    .mySkills {
        width: 0.9em;
        height: 0.9em;
        margin-right: 0.2em;
      }
      .skillsContentSection {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;        
      }
    .skillsList {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        background-color: #C1BDB5;
        margin-top: 2%;
        padding: 2rem;
        transition: 0.8s ease-out;
    }
    .sectionElement {  
        padding: 1.5em;
        font-weight: bold;
        text-align: center;
        color: white;
    }`;

export default Style;