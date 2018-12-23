import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="projects mb-2">
        <div className="card mb-4">
          <h5 className="card-header">DevConnector</h5>
          <div className="card-body">
            <h5 className="card-title">
              Social networking website for developers.
            </h5>
            <p className="card-text">
              Stack: <br />
              Server: NodeJS/ExpressJS,
              <br />
              FrontEnd: React/Redux
              <br />
              DataBase: MongoDB/MongooseJS/mLab
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://guarded-thicket-68629.herokuapp.com/"
              className="btn btn-dark"
            >
              See Live Website
            </a>
          </div>
        </div>
        <div className="card mb-4">
          <h5 className="card-header">StoryBooks</h5>
          <div className="card-body">
            <h5 className="card-title">
              A platform to write and publish stories
            </h5>
            <p className="card-text">
              Stack: <br />
              Server: NodeJS/ExpressJS,
              <br />
              FrontEnd: HandleBars (made using templating engine)
              <br />
              DataBase: MongoDB/MongooseJS/mLab
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ashish-storybook.herokuapp.com/"
              className="btn btn-dark"
            >
              See Live Website
            </a>
          </div>
        </div>
        <div className="card mb-4">
          <h5 className="card-header">IdeaJot</h5>
          <div className="card-body">
            <h5 className="card-title">
              Place to scribble ideas and keep them safe for any ongoing project
            </h5>
            <p className="card-text">
              Stack: <br />
              Server: NodeJS/ExpressJS,
              <br />
              FrontEnd: HandleBars (made using templating engine)
              <br />
              DataBase: MongoDB/MongooseJS/mLab
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ashish-ideajot.herokuapp.com/"
              className="btn btn-dark"
            >
              See Live Website
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
