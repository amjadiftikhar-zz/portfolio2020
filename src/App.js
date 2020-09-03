import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GlobalStyles from "./styles/global";

import NavigationBar from "./components/navigationBar.components/NavigationBar";
import Layout from "./components/layout.components/Layout";
import Home from "./pages/home.pages/Home";
import About from "./pages/about.pages/About";
import Projects from "./pages/projects.pages/Projects";
import Education from "./pages/education.pages/Education";
import Experience from "./pages/experience.pages/Experience";
import Contact from "./pages/contact.pages/Contact";
import Footer from "./components/footer.components/Footer";

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


