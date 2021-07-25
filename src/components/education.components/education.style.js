import styled from "styled-components";

const Style = styled.div`
    // main container styles
    .mainContainer {
        width: 100%;
        // margin-top: 3rem; 
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
        // justify-content: space-around;
        justify-content: space-between;
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
    
    .certificationIcon {
        margin-right: 0.6vw; 
        font-size: 1.6vw;
    }

    /* Media query for devices upto 1024px screens */
    @media only screen and (max-width: 1024px) {
        .educationIcon {
            font-size: 1em;
            margin-right: 0.5em;
        } 
        .subTitle {
            font-size: 1rem;
        }
        .certificationIcon {
            font-size: 0.7em;
            margin-right: 0.5em;
        }
    }

    /* Media query for devices upto 768px screens */
    @media only screen and (max-width: 768px) {
        .educationIcon {
            font-size: 1em;
            margin-right: 0.5em;
        } 
        .subTitle {
            font-size: 1rem;
        }
        .certificationIcon {
            font-size: 0.7em;
            margin-right: 0.5em;
        }
    }

    /* Media query for devices upto 414px screens */
    @media only screen and (max-width: 414px) {
        .mainContainer {
            padding: 0.5em;
        }
        .eduTitle {
            font-size: 1.5rem;
        }   
        .educationIcon {
            font-size: 1em;
            margin-right: 0.5em;
        } 
        .subTitle {
            font-size: 0.9rem;
            word-break: break-all;
        }
        .certificationIcon {
            font-size: 0.7em;
            margin-right: 0.5em;
        }
    }

    /* Media query for devices upto 414px screens */
    @media only screen and (max-width: 414px) {
        .mainContainer {
            padding: 0.5em;
        }
        .eduTitle {
            font-size: 1.5rem;
        }   
        .educationIcon {
            font-size: 1em;
            margin-right: 0.5em;
        } 
        .subTitle {
            font-size: 0.9rem;
            word-break: break-all;
        }
        .certificationIcon {
            font-size: 0.7em;
            margin-right: 0.5em;
        }
    }

    /* Media query for devices upto 376px screens */
    @media only screen and (max-width: 376px) {
        .mainContainer {
            padding: 0.5em;
        }
        .eduTitle {
            font-size: 1.5rem;
        }   
        .educationIcon {
            font-size: 1em;
            margin-right: 0.5em;
        } 
        .subTitle {
            font-size: 0.9rem;
            word-break: break-all;
        }
        .certificationIcon {
            font-size: 0.7em;
            margin-right: 0.5em;
        }
    }

    /* Media query for devices upto 320px screens */
    @media only screen and (max-width: 320px) {
        .mainContainer {
            width: 100%;
            padding: 0.5em;
        }
        .eduTitle {
            font-size: 1.5rem;
        }   
        .educationIcon {
            font-size: 0.8em;
            margin-right: 0.5em;
        } 
        .subTitle {
            font-size: 0.9rem;
            word-break: break-all;
        }
        .educationSection {
            padding: 0.5em;
        }
        .certificationIcon {
            font-size: 0.7em;
            margin-right: 0.5em;
        }
    }
`;

export default Style;