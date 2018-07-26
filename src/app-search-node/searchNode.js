import React, {
  Component
} from 'react';
import './style.css';
import axios from 'axios';

class SearchNode extends Component {

  constructor() {
    super()
    this.state = {
      searchInput: '',
      searchButton: 'disabled'
    };
  }

  validate = () => {
    let input = document.querySelector('#search');
    let url = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$/;
    if (input.value.match(url)) {
      this.setState({
        searchInput: 'valid',
        searchButton: ''
      });
    } else {
      this.setState({
        searchInput: 'invalid',
        searchButton: 'disabled'
      });
    }
  };

  search = () => {
    let query = document.querySelector('#search').value;
    let base = 'http://';
    let url = base + query;
    axios.get(url)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        M.toast({ html: 'Node not acccessible', classes: 'red white-text' });
      });

  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content white-text">
              <div className="row">
                <div className="input-field col s8 m10 l11">
                  <input id="search" type="text" className={`validate ${this.state.searchInput}`} onChange={this.validate} />
                  <label htmlFor="search">Search Node</label>
                </div>
                <a id="button" className={`waves-effect btn lime white-text ${this.state.searchButton}`} onClick={this.search}>
                  <i className="material-icons">search</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default SearchNode;
