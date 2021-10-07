import React from "react"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import About from "./components/pages/About.js";
import Services from "./components/pages/Services.js";
import Contact from "./components/pages/Contactus";
import Join from "./components/pages/Joinus";
import SignIn from "./components/pages/Sign-in.js";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/sign-up" exact component={Join} />
        <Route path="/contact-us" exact component={Contact} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
