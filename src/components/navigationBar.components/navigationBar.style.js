import styled from "styled-components";

const NavigationStyles = styled.div`
  .navbar {
    padding: 1.3rem;
    margin: 2%;
  }
  .navbar-brand, .navbar-nav .nav-link, .toggle {
    color: white;  
    &:hover {
      color: red;
    }
  }
`;

export default NavigationStyles;