import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="projects mb-2">
        <div class="card mb-4">
          <h5 class="card-header">DevConnector</h5>
          <div class="card-body">
            <h5 class="card-title">Social networking website for developers.</h5>
            <p class="card-text">
             Stack: <br />
             Server: NodeJS/ExpressJS,
             <br />
             FrontEnd: React/Redux
             <br />
             DataBase: MongoDB/MongooseJS/mLab
            </p>
            <a target= "_blank" rel='noopener noreferrer' href='https://guarded-thicket-68629.herokuapp.com/' class="btn btn-dark">
              See Live Website
            </a>
          </div>
        </div>
        <div class="card mb-4">
          <h5 class="card-header">StoryBooks</h5>
          <div class="card-body">
            <h5 class="card-title">A platform to write and publish stories</h5>
            <p class="card-text">
             Stack: <br />
             Server: NodeJS/ExpressJS,
             <br />
             FrontEnd: HandleBars (made using templating engine)
             <br />
             DataBase: MongoDB/MongooseJS/mLab
            </p>
            <a target= "_blank" rel='noopener noreferrer' href='https://ashish-storybook.herokuapp.com/' class="btn btn-dark">
              See Live Website
            </a>
          </div>
        </div>
        <div class="card mb-4">
          <h5 class="card-header">IdeaJot</h5>
          <div class="card-body">
            <h5 class="card-title">Place to scribble ideas and keep them safe for any ongoing project</h5>
            <p class="card-text">
             Stack: <br />
             Server: NodeJS/ExpressJS,
             <br />
             FrontEnd: HandleBars (made using templating engine)
             <br />
             DataBase: MongoDB/MongooseJS/mLab
            </p>
            <a target= "_blank" rel='noopener noreferrer' href='https://ashish-ideajot.herokuapp.com/' class="btn btn-dark">
              See Live Website
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
