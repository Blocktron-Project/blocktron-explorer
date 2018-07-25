import React, {
  Component
} from 'react';
import './style.css';
import axios from 'axios';

class Header extends Component {

  constructor() {
    super()
  }

  searchHandler() {
    let query = document.querySelector('#search');
    let url = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$/;
    let validUrl;
    if (!query.value.match(url)) {
      if (!query.classList.contains('invalid')) {
        query.classList += ' invalid';
        query.classList.remove('valid');
      }
    } else if (query.value.match(url)) {
      if (query.classList.contains('invalid')) {
        query.classList.remove('invalid');
        validUrl = query.value;
        console.log(query.value);
      }
    }
  };

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
                <a className="waves-effect btn lime white-text" onClick={this.searchHandler}>
                  <i className="material-icons">search</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Header;
