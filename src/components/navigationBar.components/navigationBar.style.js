import styled from "styled-components";

const NavigationStyles = styled.div`
  .navbar {
    // padding: 1.3em;
    padding: 1em;
    margin: 2%;
    background-color: #060655;
  }
  .navbar-brand, .navbar-nav .nav-link, .toggle {
    font-size: 1.1rem;
    color: white;
    &:hover {
      // color: red;
      color: orange;
      background-color: #C1BDB5;
      font-weight: 'bold';
    }
  }
  .toggle {
    font-size: 1rem;
  }
  .nav-link {
    // margin-left:0.5rem;
    margin-left: 0.2em;
    font-size: 0.85rem;
  }
`;

export default NavigationStyles;