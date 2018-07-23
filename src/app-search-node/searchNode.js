import React, {
  Component
} from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content white-text">
              <div className="row">
                <div className="input-field col s8 m10 l11">
                  <input id="search" type="text" className="validate" />
                  <label htmlFor="search">Search Node</label>
                </div>
                <a className="waves-effect btn lime white-text"><i className="material-icons">search</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
