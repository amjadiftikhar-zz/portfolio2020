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
      <Router>
        <NavigationBar/>
        <Switch>
          <Layout fluid={true} id="apps">
            <Route exact path="/"  component={Home} />
            <Route path="/about"  component={About} />
            <Route path="/projects"  component={Projects} />
            <Route path="/education"  component={Education} />
            <Route path="/experience"  component={Experience} />
            <Route path="/contact"  component={Contact} />
          </Layout>   
        </Switch>
        <GlobalStyles/>;
      </Router>
      <Footer/>
    </React.Fragment>
  );
}























