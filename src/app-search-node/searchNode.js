import React, {
  Component
} from 'react';
import './style.css';
import axios from 'axios';

class Header extends Component {

  constructor() {
    super()
    this.state = {
      searchInput: 'validate',
      searchButton: 'waves-effect btn lime white-text disabled'
    };
  }

  validate = () => {
    let input = document.querySelector('#search');
    let button = document.querySelector('#button');
    let url = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$/;
    if (input.value.match(url)) {
      this.setState({
        searchInput: 'validate valid',
        searchButton: 'waves-effect btn lime white-text'
      });
    } else {
      this.setState({
        searchInput: 'validate invalid',
        searchButton: 'waves-effect btn lime white-text disabled'
      });
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
                  <input id="search" type="text" className={this.state.searchInput} onChange={this.validate} />
                  <label htmlFor="search">Search Node</label>
                </div>
                <a id="button" className={this.state.searchButton}>
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
