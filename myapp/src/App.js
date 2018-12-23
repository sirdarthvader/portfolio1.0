import React, { Component } from "react";
import "./App.css";
import { Particles } from "react-particles-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="App">
            <Particles className="background" params={particleOptions} />

            <Navigation />
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
