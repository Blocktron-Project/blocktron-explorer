import React, {
  Component
} from 'react';
import './style.css';

class Header extends Component {
  render() {
    return ( 
    <div className="navbar-fixed">
    <nav className="white">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo lime-text">&nbsp; Blocktron</a>
      </div>
    </nav>
  </div>);
  }
}

export default Header;
