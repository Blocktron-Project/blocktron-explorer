import React, {
  Component
} from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed" >
        <nav className="white" >
          <div className="nav-wrapper" >
            <a href="#!" className="brand-logo lime-text" >&nbsp; Blocktron Explorer
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a className="orange-text">Beta v0.0.1</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
