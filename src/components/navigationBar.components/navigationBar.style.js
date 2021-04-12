import styled from "styled-components";

const NavigationStyles = styled.div`
  .navbar {
    padding: 1.3em;
    margin: 2%;
    background-color: #060655;
  }
  .navbar-brand, .navbar-nav .nav-link, .toggle {
    font-size: 1.1em;
    color: white;
    &:hover {
      color: red;
      background-color: #C1BDB5;
      font-weight: 'bold';
    }
  }
  .toggle {
    font-size: 1rem;
  }
  .nav-link {
    margin-left:0.5rem;
    font-size: 0.85rem;
  }
`;

export default NavigationStyles;