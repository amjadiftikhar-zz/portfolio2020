import styled from "styled-components";

const LandingPageStyle = styled.div`
    .homeTopSection {
        display:flex;
        flex-wrap: wrap;
        background-color: #C1BDB5;
        min-height: 150vh;
        width: 100%;
    }
    .rightSection {
        display: flex;
        flex-direction: column;  
        color: white;
        margin-left: 15vw;
        margin-top: 15vw;
    }
    .firstNameLastName {
        display: flex;
        flex-wrap: wrap;
    }
    .firstName{
        color: white;
        font-weight: bold;
        font-size: 3rem;
        letter-spacing: 0.2rem;
    }
    .lastName {
        color: orange;
        font-weight: bold;
        margin-left: 1vw;
        font-size: 3rem;
        letter-spacing: 0.2rem;
    }
    .textAnimation {
        font-size: 1rem;
        color: orange;
        letter-spacing: 0.2rem;
        text-align: center;
    }
    .profilePic {
        width: 9vw;
        height: 9vw;     
    }
    .leftSection {
        margin-top: 3rem;
        display: flex;
        flex-direction: column; 
        width: 20%;
        min-height: 100vh;
        align-items: center;        
    }
    h6 {
        margin-top: 0.7rem;
        font-size: 1.5vw;
    }
    .classContact {
        display: flex;
        padding: 5%;
        border-bottom: 0.1px solid gray;
    }
    .socialMediaIcons {
        width: 2.3vw;
        height: 2.3vw;
        color: black;
        border-radius: 50%;
    }
    .classContact a {
        margin-right: 0.4rem;
        margin-left: 0.4rem;
    }
    .promptBtn {
        display: flex;
        margin-top: 4rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;        
        justify-content: space-around;
    }
    .projectContactBtn {
        padding:0.6rem;
        width: 11rem;
        border-radius: 5em;
        background-color:  lightgray; 
        text-decoration: none;
        color: black;
        text-align: center;
        margin: 0.3rem;
    }
`;

export default LandingPageStyle;