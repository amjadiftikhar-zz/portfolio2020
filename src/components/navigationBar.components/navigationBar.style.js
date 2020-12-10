import styled from "styled-components";

const NavigationStyles = styled.div`
  .navbar {
    padding: 1.3em;
    margin: 2%;
    background-color: #060655;
  }
  .navbar-brand, .navbar-nav .nav-link, .toggle {
    color: white;
    &:hover {
      color: red;
      background-color: #C1BDB5;
    }
  }
  .toggle {
    font-size: 1rem;
  }
  .nav-link {
    margin-left:0.5rem;
    font-size: 1rem;
  }
  .nav-link:nth-child(5) {
    border-right: none; 
  }
  .navbar-brand {
    border-right: none;
    transform: none;
  }
`;

export default NavigationStyles;