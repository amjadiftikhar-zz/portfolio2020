import styled from "styled-components";

const Style = styled.div`
    // main container styles
    .mainContainer {
        margin-top: 3rem; 
        transition: 2s ease-out;
    }
    .eduTitle {
        margin-bottom: 1.5rem;
    }
    .educationIcon {
        margin-right: 0.6vw;
        font-size: 1.6vw;
    }
    .subTitle {
        font-size: 1.2rem;
    }
    .placeName {
        font-size: 1.1rem;
    }
    .educationSection {
        display: flex;
        justify-content: space-around;
        margin-bottom: 2rem;
        background-color: #f3f3f3;
    }
    .educationContents {
        margin: 1rem;
    }
    .pItalic {
        font-style: italic;
        color: darkgreen;
    }
`;

export default Style;