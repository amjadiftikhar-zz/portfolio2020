import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavigationBar from "./components/navigationBar.components/NavigationBar";
import Layout from "./components/layout.components/Layout";
import Home from "./components/home.components/Home";
import About from "./components/about.components/About";
import Projects from "./components/project.components/Projects";
import Education from "./components/education.components/Education";
import Experience from "./components/experience.components/Experience";
import Contact from "./components/contact.components/Contact";
import Footer from "./components/footer.components/Footer";
import GlobalStyles from "./styles/global";

export default function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Layout fluid={true}>
        <Router>
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/about"  component={About} />
            <Route path="/projects"  component={Projects} />
            <Route path="/education"  component={Education} />
            <Route path="/experience"  component={Experience} />
            <Route path="/contact"  component={Contact} />
          </Switch>
          <GlobalStyles/>;
        </Router>
        <Footer/>
      </Layout>        
    </React.Fragment>
  );
}























// import React from 'react';
// import './App.css';
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import GlobalStyles from "./styles/global";

// import NavigationBar from "./components/navigationBar.components/NavigationBar";
// import Layout from "./components/layout.components/Layout";
// // import Home from "./pages/home.pages/Home";
// import Home from "./components/home.components/Home";
// // import About from "./pages/about.pages/About";
// import About from "./components/about.components/About";
// // import Projects from "./pages/projects.pages/Projects";
// // import ProjectsPage from "./pages/projects.pages/Projects";
// import Projects from "./components/project.components/Projects";
// // import Education from "./pages/education.pages/education";
// import Education from "./components/education.components/Education";
// // import Experience from "./pages/experience.pages/experience";
// import Experience from "./components/experience.components/Experience";
// // import Contact from "./pages/contact.pages/Contact";
// import Contact from "./components/contact.components/Contact";
// import Footer from "./components/footer.components/Footer";

// export default function App() {
//   return (
//     <React.Fragment>
//       <NavigationBar/>
//       <Layout fluid={true}>
//         <Router>
//           <Switch>
//             <Route exact path="/"  component={Home} />
//             <Route path="/about"  component={About} />
//             {/* <Route path="/projects"  component={Projects} /> */}
//             <Route path="/projects"  component={Projects} />
//             <Route path="/education"  component={Education} />
//             <Route path="/experience"  component={Experience} />
//             <Route path="/contact"  component={Contact} />
//           </Switch>
//           <GlobalStyles/>;
//         </Router>
//         <Footer/>
//       </Layout>        
//     </React.Fragment>
//   );
// }


