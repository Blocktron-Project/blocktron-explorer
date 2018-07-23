import React, { Component } from 'react';
import './style.css';

class Welcome extends Component {
    render() {
        return ( 
            <div className="row">
            <div className="col s12">
              <div className="card-panel lime lighten-4">
                <span className="light-green-text darken-4">I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                </span>
              </div>
            </div>
          </div>
        );
    }
}
export default Welcome;
