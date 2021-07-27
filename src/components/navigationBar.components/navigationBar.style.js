import styled from "styled-components";

const NavigationStyles = styled.div`
  .navbar {
    // width: 100%;
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
      // background-color: #C1BDB5;
      font-weight: 'bold';
    }
  }
  .active {
    background-color: #060655!important;
    color: white !important;
    border-bottom: 2px solid white !important;
  }
  .active:hover {
    color: orange !important;
  }
  .toggle {
    font-size: 1rem;
  }
  .nav-link {
    // margin-left:0.5rem;
    margin-left: 0.2em;
    font-size: 0.85rem;
  }

  /* Media query for devices upto 414px screens */
    @media only screen and (max-width: 414px) {
      .navbar {
        // width: 100%;
      }
    }
`;

export default NavigationStyles;