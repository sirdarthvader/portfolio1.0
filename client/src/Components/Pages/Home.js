import React, { Component } from "react";
import Typing from "react-typing-animation";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="jumbotron">
          <h1 className="display-1">Hello, world!</h1>
          <h5 style={{ color: "white" }}>
            I am Ashish, I am a javaScript developer.
          </h5>
          <Typing>
            <span>This span will get typed.</span>
          </Typing>
        </div>
      </div>
    );
  }
}

export default Home;
