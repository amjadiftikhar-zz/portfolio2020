import styled from "styled-components";

const Style = styled.div`
  h3 {
    margin-top: 5em; 
    padding: 0.5em;
  }
  .classContacts{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;  
    margin: 5%; 
  }
  .classContents {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-right: 7%;
    margin-bottom: 10%;
  }
  .classIcon {
    width: 2.5em;
    height: 2.5em;
    margin: 2%;
    color: black;
    margin: auto;
  }
  .classTooltip {
    display: none;
  }
  .toolTip:hover .classTooltip { 
    display: block;
    padding: 0.3em;
    position: absolute;
    font-size: 12px;
  }
 span {
   line-height: 3em;
   font-size: 12px;
 }
`;

export default Style;