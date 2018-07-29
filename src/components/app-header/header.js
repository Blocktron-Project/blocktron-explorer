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
            <a href="#!" className="brand-logo lime-text" > &nbsp; Blocktron <span className="beta-badge right">Beta v0.0.1</span></a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
