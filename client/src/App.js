import React, { Component } from "react";
import "./App.css";
import { Particles } from "react-particles-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import Blog from "./Components/Pages/Blog";
import Skills from "./Components/Pages/Skills";
import Contact from "./Components/Pages/Contact";

const snowParticle = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1,
      direction: "top",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0,
      },
      repulse: {
        distance: 400,
        duration: 4,
      },
    },
  },
};
let particleOptions = snowParticle;

const starParticles = {
  "particles": {
      "number": {
          "value": 50
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
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
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
