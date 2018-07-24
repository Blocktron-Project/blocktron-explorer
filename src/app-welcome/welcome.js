import React, { Component } from 'react';
import './style.css';

class Welcome extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card-panel lime lighten-4">
            <span className="light-green-text darken-4">
              <strong>Hello, there</strong>..welcome to Blocktron explorer, you can interact with your blocktron-node instance throught his app.
              <i className="right material-icons">cancel</i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
