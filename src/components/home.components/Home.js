import React from 'react';
import {Container} from "react-bootstrap";
import LandingPageComponent from "../landingPage.components/LandingPage";
import About from "../about.components/About";
import Education from "../education.components/Education";
import Experience from "../experience.components/Experience";
import Projects from "../project.components/Projects";
import Accordion from "../accordion.components/Accordion";
// import Button from "../../components/button.component/Button";
import ButtonComponent from "../../components/button.component/Button";
import { useHistory } from 'react-router-dom';

export default function Home() {

  const history = useHistory();
  const onclickHandle = () => {
    // e.preventDefault();
    alert('back button clicked')
  let path = `/`;
  history.push(path);
  }

  return (
    <Container className="container-fluid">
      <LandingPageComponent/>
      <About/>
      <Projects/>
      <Accordion title="Education">
        <Education/>      
      </Accordion> 
      <Accordion title="Experience">
        <Experience/>      
      </Accordion> 
      <ButtonComponent title="Back to top" />
    </Container> 
  );
}




























// import React from 'react';
// import {Container} from "react-bootstrap";
// import LandingPageComponent from "../landingPage.components/LandingPage";
// // import About from "../../pages/about.pages/About";
// import About from "../about.components/About";
// // import Education from "../education.pages/education";
// // import Education from "../../components/education.components/Education"
// import Education from "../education.components/Education";
// // import Experience from "../experience.pages/experience";
// import Experience from "../experience.components/Experience";
// // import Projects from "../../pages/projects.pages/Projects";
// import Projects from "../project.components/Projects"
// // import ProjectsPage from "../../pages/projects.pages/Projects";
// import Accordion from "../accordion.components/Accordion";
// // import Button from "../../components/button.component/Button";
// // import { useHistory } from 'react-router-dom';

// export default function Home() {
//   // const history = useHistory();
//   // const onclickHandle = () => {
//   // let path = `/`;
//   // history.push(path);
//   // }

//   return (
//     <Container className="container-fluid">
//       <LandingPageComponent/>
//       <About/>
//       <Projects/>
//       {/* <ProjectsPage/> */}
//       <Accordion title="Education">
//         <Education/>      
//       </Accordion> 
//       <Accordion title="Experience">
//         <Experience/>      
//       </Accordion> 
//     </Container> 
//   );
// }
