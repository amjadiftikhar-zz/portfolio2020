import styled from "styled-components";

const Style = styled.div`
    h3 {
        margin-bottom: 5%;
        padding: 0.2em;
    } 
    .skillSection {
        margin: 2%;
    }
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
        padding: 2rem;
    }
    .sectionElement {  
        padding: 1.5em;
        font-weight: bold;
        text-align: center;
    }
`;

export default Style;