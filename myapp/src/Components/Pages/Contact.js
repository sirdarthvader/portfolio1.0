import React, { Component } from 'react';
import avatar from './images/avatar.jpeg';

class Contact extends Component {
  render() {
    return (
      <div className='contact-us'>
        <div className="jumbotron text-center">
          <img className='img-fluid' style={{width: '200px', height: 'auto', borderRadius: '50%'}} src={avatar} alt=""/>
          <hr style={{color: 'white'}} />
          <div className="links">
            <div className="github"><i class="fab fa-github"></i></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;