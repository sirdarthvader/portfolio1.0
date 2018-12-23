import React, { Component } from "react";
import {Particles} from "react-particles-js";
import './App.css';
import Navigation from './Components/Navigation';
const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
}

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Particles
          className='background'
          params={particleOptions}
        />
        <Navigation />
      </div>
    );
  }
}

export default App;
