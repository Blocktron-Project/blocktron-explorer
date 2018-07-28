import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Welcome extends Component {
  
  constructor() {
    super();
    this.hide = this.hide.bind(this);
  }

  hide() {
    let mountNode = ReactDOM.findDOMNode(this.refs.hideme);
    mountNode.classList += ' hide';
  };

  render() {
    return (
      <div className="row" ref="hideme">
        <div className="col s12">
          <div className="card-panel lime lighten-4">
            <span className="light-green-text darken-4">
              <strong>Hello, there</strong>..welcome to Blocktron explorer, you can interact with your blocktron-node instance throught his app.
              <i className="right material-icons" onClick={this.hide}>cancel</i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
