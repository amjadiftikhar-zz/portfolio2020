
import styled from "styled-components";
const Style = styled.div`
    footer {
        display: flex;
        background-color: #343a40;
        width: 100%;        
        justify-content: space-between;
        padding: 2rem;
    }
    .allRights {
        display: flex;
        flex-direction: column;
        color: white;
        font-family: sans-serif;
    }
    .allRights span {
        color: gray;
    }
    .socialMediaLinks {
        display: flex;
        flex-wrap: wrap;
    }
    .classIcon {
        margin-left: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        color: white;
    }
`;

export default Style;